import styles from './Card.module.scss';

const Card = ({ children }) => {
    return (
        <div className={styles.card}>
            {children}
        </div>
    );
};

export default Card;

// Adesso posso utilizzare questo custom element per wrappare
// la mie schede in MeetUpItems.

//* children => props.children
// props.children mi consente di wrappare il contenuto di MeetUpItems
// senza sovrascriverlo completamente, dal momento che contiene
// tutto ciò che è incluso tra il tag di apertura e quello di chiusura.

// <Card>
// {children} => JSX
// </Card>