import { Link } from "react-router-dom";

const MainNavBar = () => {
    return (
        <header>
            <div>React MeetUps</div>
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