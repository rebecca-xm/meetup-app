import Card from "../ui/Card";

const MeetUpItems = ({ image, title, address, description }) => {
    return (
        <li>
            <Card>
                <div>
                    <img src={image} alt={title} />
                </div>
                <div>
                    <h3>{title}</h3>
                    <address>{address}</address>
                    <p>{description}</p>
                </div>
                <div>
                    <button>Add To Favorites</button>
                </div>
            </Card>
        </li>
    );
};

export default MeetUpItems;