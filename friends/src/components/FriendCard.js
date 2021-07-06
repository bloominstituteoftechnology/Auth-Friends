import styled from "styled-components";


const FriendDiv = styled.div`
    width: 15rem; 
    padding: .25rem 0; 
    margin: 1% auto; 
    background-color: darkslateblue; 
    color: white;
    border-radius: 5px;
`;

const NameH4 = styled.h4`
    text-decoration: underline; 
    color: dodgerblue; 
    font-size: 1.4rem;
    line-height: .5rem;
`;

const FriendCard = (props) => {
    const {friend} = props
    return (
        <FriendDiv>
            <NameH4>{friend.name}</NameH4>
            <p>Age: {friend.age}</p>
            <p>email: {friend.email}</p>
        </FriendDiv>
          
    )
};

export default FriendCard;