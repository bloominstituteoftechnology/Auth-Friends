import React from 'react';
import { AxiosWithAuth } from './utils/AxiosWithAuth';
import { Table } from 'reactstrap';
import Header from './Header';
import Loading from '../components/Loading';

import '../App.css';

class FriendsList extends React.Component {
  state = {
    friends: [],
    isLoading: false,
    SuccessMsg: '',
    errorMsg: ''
  };

  componentDidMount() {
    this.getData();
  }

  // Get request
  getData = () => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      AxiosWithAuth()
        .get('/api/friends')
        .then(response => {
          // console.log('Get Friends List', response);
          this.setState({ friends: response.data });
          this.setState({ isLoading: false });
          // console.log('Friends in State', this.state.friends);
        })
        .catch(err => console.log('Error Loading Friend List', err));
    }, 1500);
    //
  };

  //Delete request
  delFriend = id => {
    AxiosWithAuth()
      .delete(`/api/friends/${id} `)
      .then(response => {
        // console.log(response);
        this.setState({ friends: response.data });
        this.setState({ SuccessMsg: response.statusText });
      })
      // console.log(this.state.friends)
      .catch(err => this.setState({ errorMsg: err }));
  };

  render() {
    return (
      <div>
        <Header />

        {this.state.isLoading === true ? (
          <Loading />
        ) : (
          <div className='cardBody'>
            <p className='errorMsg'>
              {this.state.errorMsg ? 'Unable to Delete' : null}
            </p>
            <p className='succMsg'>
              {this.state.SuccessMsg ? 'Delete Success!' : null}
            </p>
            <Table responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Email</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.state.friends.map(friend => {
                  return (
                    <tr key={friend.id}>
                      <td>{friend.name}</td>
                      <td>{friend.age}</td>
                      <td>{friend.email}</td>
                      <td>
                        <button
                          onClick={() => this.delFriend(friend.id)}
                          className='smallBtn'>
                          Delete
                        </button>
                      </td>
                      <td>
                        <button className='smallBtn'>Edit</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        )}
      </div>
    );
  }
}

export default FriendsList;
