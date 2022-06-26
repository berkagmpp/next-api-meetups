import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const newMeetupPage = () => {
    const newMeetupHandler = (enteredMeetupData) => {
        console.log(enteredMeetupData);
    };

    return (
        <NewMeetupForm onAddMeetup={newMeetupHandler} />
    );
};

export default newMeetupPage;