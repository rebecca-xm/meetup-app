import styles from './NewMeetUpForm.module.scss';
import Card from '../ui/Card';

const NewMeetUpForm = () => {
    return (
        <Card>
            <form className={styles.form}>
                <div className={styles.control}>
                    <label htmlFor='title'>MeetUp Title</label>
                    <input type='text' id='title' required />
                </div>
                <div className={styles.control}>
                    <label htmlFor='image'>MeetUp Image</label>
                    <input type='url' id='image' required />
                </div>
                <div className={styles.control}>
                    <label htmlFor='address'>MeetUp Address</label>
                    <input type='text' id='address' required />
                </div>
                <div className={styles.control}>
                    <label htmlFor='description'>MeetUp Description</label>
                    <textarea id='description' rows='5' required></textarea>
                </div>
                <div className={styles.actions}>
                    <button>Add MeetUp</button>
                </div>
            </form>
        </Card>
    );
};

export default NewMeetUpForm;