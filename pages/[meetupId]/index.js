import { MongoClient } from 'mongodb';

import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
    return (
        <MeetupDetail image="https://www.interest.co.nz/sites/default/files/feature_images/65%20Federal%20Harbour%20View.jpg"
                      title="The First Meetup"
                      address="5 Howe Street, Freemansbay, Auckland"
                      description="This is the first meetup!" />
    );
};

export async function getStaticPaths() {
    //  fetch data from an API
    const client = await MongoClient.connect('mongodb+srv://Berkagmpp:iHvCmVMWmdAmfW7m@cluster0.xhth6cm.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupCollection = db.collection('meetups');
    const meetupsData = await meetupCollection.find({}, { _id: 1 }).toArray();  // find({all data}, {only _id in the all data})

    client.close();     // close the database connection once it's done

    return {
        fallback: false, // when the user enters /m3 -> false: shows 404 error, true: NextJs would try to generate a page for m3 id dynamically on the server
        paths: meetupsData.map(meetup => ({
            params: {
                meetupId: meetup._id.toString()
            }
        }))
    };
};

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;   // context.params.meetupId is identified from [meetupid] folder

    //  fetch data from an API
    const client = await MongoClient.connect('mongodb+srv://Berkagmpp:iHvCmVMWmdAmfW7m@cluster0.xhth6cm.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupCollection = db.collection('meetups');
    const selectedMeetup = await meetupCollection.findOne({_id: meetupId});

    client.close();     // close the database connection once it's done

    return {
        props: {
            meetupData: selectedMeetup,
        }
    };
};

export default MeetupDetails;