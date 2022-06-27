import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'The First Meetup',
        image: 'https://www.interest.co.nz/sites/default/files/feature_images/65%20Federal%20Harbour%20View.jpg',
        address: '5 Howe Street, Freemansbay, Auckland',
        desctription: 'This is the first meetup!'
    },
    {
        id: 'm2',
        title: 'The Second Meetup',
        image: 'https://live.staticflickr.com/4082/35503054901_69f7270369_b.jpg',
        address: '20 Victoria Street, Rosebank, Waitama',
        desctription: 'This is the second meetup!'
    }
];

const HomePage = () => {
    const [loadedMeetups, setLoadedMeetups] = useState([]);
    
    useEffect(() => {
        // send a HTTP request and fetch data
        setLoadedMeetups(DUMMY_DATA);     // using DUMMY_DATA as the loadedMeetups
    }, []);

    return (
        <MeetupList meetups={loadedMeetups} />
    );
};

export default HomePage;