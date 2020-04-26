import React from 'react';
import { AxiosWithAuth } from './utils/AxiosWithAuth';
import { Table } from 'reactstrap';
import Header from './Header';
import Loading from '../components/Loading';

import '../App.css';

class FriendsList extends React.Component {
  state = {
    friends: [],
    isLoading: false
  };

  componentDidMount() {
    this.getData();
  }

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

  render() {
    return (
      <div>
        <Header />
        {this.state.isLoading === true ? (
          <Loading />
        ) : (
          <div className='cardBody'>
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
                        <button className='smallBtn'>Delete</button>
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
