import MeetUpItems from "./MeetUpItems";
import styles from './MeetUpList.module.scss';

const MeetUpList = ({ meetup }) => {
    return (
        <ul className={styles.list}>
            {meetup.map((meetup) => (
                <MeetUpItems
                    key={meetup.id}
                    id={meetup.id}
                    image={meetup.image}
                    title={meetup.title}
                    address={meetup.address}
                    description={meetup.description}
                />
            ))}
        </ul>
    );
};

export default MeetUpList;

// Questo componente va a sostituire quello statico attualmente
// presente in AllMeetUps (TEMP_DATA).