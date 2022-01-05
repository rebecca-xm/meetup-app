import MeetUpList from "../components/meetups/MeetUpList";

const TEMP_DATA = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
        id: 'm2',
        title: 'This is a second meetup',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
];

//* REMINDER:
// per renderizzare dinamicamente una lista di dati in una lista
// di elementi JSX, mi avvalgo del built-in map che mi consente di
// eseguire una funzione su ogni elemento presente nell'array.
// In questo caso, meetup sarà il mio elemento input.
// Per ogni oggetto meetup, voglio che ritorni un elemento li
// nel quale saranno renderizzati i relativi dati del mio array. 

const AllMeetUpsPage = () => {
    return (
        <section>
            <h1>All MeetUps</h1>
            {/* <ul>
                {TEMP_DATA.map((meetup) => {
                    return <li key={meetup.id}>{meetup.title}</li>;
                })}
            </ul> */}
            <MeetUpList meetup={TEMP_DATA} />
        </section>
    );
};

export default AllMeetUpsPage;