import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const newMeetupPage = () => {
    // send a request to the API route
    const router = useRouter();

    const addMeetupHandler = async (enteredMeetupData) => {
        const response = await fetch('/api/new-meetup',{
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });    // NextJS trigger handler fn in /api/new-meetup.js

        const data = await response.json();

        console.log(data);

        router.push('/');
    };

    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    );
};

export default newMeetupPage;