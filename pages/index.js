import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';

const HomePage = (props) => {   // this props is for getStaticProps fn below
    return (
        <MeetupList meetups={props.meetupData} />
    );
};

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
    
//     //  fetch data from an API
//     return {
//         props: {
//             meetupData: DUMMY_DATA
//         }
//         // getServerSideProps fn runs for every incoming requests anyways, so revalidate is not neccessary
//     };

// };

// getStaticProps allows async and NextJS will wait until the data loaded
export async function getStaticProps() {   //  only works in component files inside of the pages folders
    //  fetch data from an API
    const client = await MongoClient.connect('mongodb+srv://Berkagmpp:iHvCmVMWmdAmfW7m@cluster0.xhth6cm.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupCollection = db.collection('meetups');
    const meetupsData = await meetupCollection.find().toArray();

    client.close();     // close the database connection once it's done

    return {    //  getStaticProps fn should always return a props obj
        props: {
            meetupData: meetupsData.map(meetup => ({
                id: meetup._id.toString(),
                title: meetup.title,
                image: meetup.image,
                address: meetup.address
            }))
        },
        revalidate: 30      // every 30 seconds, the data will updated without re-deploy or re-build manually after deployment
    };

};

export default HomePage;