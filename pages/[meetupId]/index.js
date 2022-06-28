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

    return {
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }

            },
            {
                params: {
                    meetupId: 'm2'
                },

            }
        ],
        fallback: false // when the user enters /m3 -> false: shows 404 error, true: NextJs would try to generate a page for m3 id dynamically on the server
    };
};

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;   // context.params.meetupId is identified from [meetupid] folder

    return {
        props: {
            id: meetupId,
            image: "https://www.interest.co.nz/sites/default/files/feature_images/65%20Federal%20Harbour%20View.jpg",
            title: "The First Meetup",
            address: "5 Howe Street, Freemansbay, Auckland",
            description: "This is the first meetup!"
        }
    };
};

export default MeetupDetails;