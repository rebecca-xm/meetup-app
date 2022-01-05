import { Link } from "react-router-dom";
import styles from './MainNavBar.module.scss';

const MainNavBar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>React MeetUps</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All MeetUps</Link>
                    </li>
                    <li>
                        <Link to='newmeetup'>New MeetUp</Link>
                    </li>
                    <li>
                        <Link to='favorites'>Favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavBar;