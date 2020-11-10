import FriendsDash from "./FriendsDash"


const FriendCard = (props) => {
    const {friend} = props
    return (
        <div>
            <h4>{friend.name}</h4>
            <p>Age: {friend.age}</p>
            <p>email: {friend.email}</p>
        </div>
          
    )
};

export default FriendCard;