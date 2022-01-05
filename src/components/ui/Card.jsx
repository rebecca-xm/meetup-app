import styles from './Card.module.scss';

const Card = (props) => {
    return (
        <div className={styles.card}>
            {props.children}
        </div>
    );
};

export default Card;

// Adesso posso utilizzare questo custom element per wrappare
// la mie schede in MeetUpItems.