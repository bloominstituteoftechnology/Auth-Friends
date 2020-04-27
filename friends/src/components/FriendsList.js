import React from 'react';


const FriendsList = () => {
    const [friendsList, setFriendsList] = useState([]);

    useEffect(() => {
        axiosWithAuth()
          .get("/friends")
          .then(res => {
            setFriendsList(res.data);
          })
          .catch(err => console.log(err));
      }, []);
    
      return (
        <div className="protected-page">
          <h1>Friends List</h1>
          <h3>
            Here is a list of your friends!
          </h3>
    
          <br />
          <hr />
    
    
          <div className="friends">
            {friendsList.map(friend => {
              return (
                <div id={friend.id} className="friend">
                  <h1>{friend.name}</h1>
                  <h2>{friend.age}</h2>
                  <p>{friend.email}</p>
                </div>
              );
            })}
          </div>
    
          <hr />
    
          <AddFriend setFriends={setFriends} />
        </div>
      );
    };

export default FriendsList;
