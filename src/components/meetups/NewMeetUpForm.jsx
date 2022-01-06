import styles from './NewMeetUpForm.module.scss';
import Card from '../ui/Card';
import { useRef } from 'react';

const NewMeetUpForm = () => {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetUpData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        };

        console.log(meetUpData);
    };

    return (
        <Card>
            <form className={styles.form} onSubmit={submitHandler}>
                <div className={styles.control}>
                    <label htmlFor='title'>MeetUp Title</label>
                    <input type='text' id='title' required ref={titleInputRef} />
                </div>
                <div className={styles.control}>
                    <label htmlFor='image'>MeetUp Image</label>
                    <input type='url' id='image' required ref={imageInputRef} />
                </div>
                <div className={styles.control}>
                    <label htmlFor='address'>MeetUp Address</label>
                    <input type='text' id='address' required ref={addressInputRef} />
                </div>
                <div className={styles.control}>
                    <label htmlFor='description'>MeetUp Description</label>
                    <textarea
                        id='description'
                        rows='5'
                        required ref={descriptionInputRef}>
                    </textarea>
                </div>
                <div className={styles.actions}>
                    <button>Add MeetUp</button>
                </div>
            </form>
        </Card>
    );
};

export default NewMeetUpForm;

// PRIMO STEP:
// aggiungere onSubmit al componente form

// SECONDO STEP:
// creare la funzione submtHandler che va triggerata
// soltanto in seguito al submit del form

// TERZO STEP:
// per leggere i valori inseriti dall'utente tramite input,
// mi avvalgo di useRef

// QUARTO STEP:
// creare l'oggetto meetUpData, al cui interno andranno
// inseriti gli output dei singoli input