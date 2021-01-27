import React, { Component } from 'react';
import axios from 'axios';

import { authLogOut } from '../../auth/AuthLogOut';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Contanier from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import './FriendList.scss';

export class FriendsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: '',
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    authLogOut()
      .get('/friends')
      .then(res => {
        console.log('Friends', res.data);
        this.setState({
          friends: res.data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/friends', {
        id: new Date(),
        name: this.state.name,
        age: this.state.age,
        email: this.state.email,
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    // const newFriend = {
    //   id: Date.now(),
    //   name: this.state.name,
    //   age: this.state.age,
    //   email: this.state.email,
    // };
  };

  render() {
    return (
      <Contanier className='main-contanier'>
        <TableContainer component={Paper}>
          <Table aria-label='customized table' stickyHeader='true'>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align='right'>Age</TableCell>
                <TableCell align='right'>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.friends.map(friend => (
                <TableRow key={friend.id}>
                  <TableCell component='th' scope='row'>
                    {friend.name}
                  </TableCell>
                  <TableCell align='right'>{friend.age}</TableCell>
                  <TableCell align='right'>{friend.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box>
          <h2>Add Friend</h2>
          <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <input
                onChange={this.handleChange}
                name='name'
                id='name'
                placeholder='Name'
                value={this.state.name}
              />

              <input
                onChange={this.handleChange}
                name='age'
                id='age'
                value={this.state.age}
                placeholder='Age'
              />

              <input
                onChange={this.handleChange}
                name='email'
                id='email'
                placeholder='Email'
                value={this.state.email}
              />
            </div>

            <button onClick={e => this.handleSubmit(e)}>Submit Friend</button>
          </form>
        </Box>
      </Contanier>
    );
  }
}

export default FriendsList;
