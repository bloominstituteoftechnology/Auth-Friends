import React from 'react';

class AddFriend extends React.Component {
  constructor() {
    super();
    this.state ={
      id: 2,
      name: '',
      age: 0,
      email: '',
    };
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHamdler = event => {
    event.preventDefault();
    if (this.props.editFriend) {
      this.props.editAFriend( this.state, this.props.match.params.id);
    } else {
      this.props.addFriend(this.state);
    }
    this.props.history.push('/home');
  };

  render() {
    return(

      <div>
      <h2></h2>
      
      
      </div>
    );
  }
}

const mapStateToProps= state => {
  return {
    isfetchingFriends;

  }
}