import React from 'react';
//import Loader from 'react-loader-spinner';
import { axiosWithAuth } from './../utils/axiosWithAuth';
//import AddFriendForm from './AddFriendForm';

class FriendList extends React.Component {
  state = {
    getFriends:[]
  }
  
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get('/friends')
      .then(res => {
        //console.log({ res })
        this.setState({ getFriends: res.data })
        //console.log('getFriends', this.getFriends)
      })
      .catch(err => console.log({ err }),[]);
  };
  
  formatData = () => {
    const formattedData = [];
    //console.log(this.state.getFriends);
    this.state.getFriends.forEach((friend, index, arr) => {
      if (friend) {
        formattedData.push({
          id: friend.id,
          name: friend.name,
          age: friend.age,
          email: friend.email
        });
      }
    });
    return formattedData;
  };

  render() {
    const getFriends = this.formatData();
    console.log(getFriends);
    return (
      <div>
        {/* <AddFriendForm /> */}
        {getFriends.map(friend =>
          <div className='uk-width-medium uk-card uk-card-default uk-card-body uk-margin' key={friend.id}>
            <div>Name: {friend.name}</div>
            <div>Age: {friend.age}</div>
            <div>Email: {friend.email}</div>
          </div>
        )} 
      </div>
    )
  }
}

export default FriendList;
