import Card from "../ui/Card";
import styles from './MeetUpItems.module.scss';

const MeetUpItems = ({ image, title, address, description }) => {
    return (
        <li className={styles.item}>
            <Card>
                <div className={styles.image}>
                    <img src={image} alt={title} />
                </div>
                <div className={styles.content}>
                    <h3>{title}</h3>
                    <address>{address}</address>
                    <p>{description}</p>
                </div>
                <div className={styles.actions}>
                    <button>Add To Favorites</button>
                </div>
            </Card>
        </li>
    );
};

export default MeetUpItems;