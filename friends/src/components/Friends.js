import React from 'react';
import logo from './logo.svg';
// Redux
import { connect } from 'react-redux';
// Redux--Actions
import { putFriend, deleteFriend } from '../actions';

const Friends = (props) => {
  return (
    <div className="list">
      {
        props.status ? 
          ( <img src={logo} className="App-logo" alt="logo" /> )
          :
          (
            props.friends.map(obj => {
              return <FriendDisplay 
                key={obj.id}
                delete={props.deleteFriend}
                put={props.putFriend}
                {...obj}
              />;
            })
          )
      }
    </div>
  );
}

class FriendDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
      likes: '',
      edit: false,
    };
  }

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  editFields = (id) => {
    const { name, age, email, likes } = this.props;
    
    if (this.state.edit === false) this.setState({
      name: name,
      age: age,
      email: email,
      likes: likes,
      edit: true, 
    });

    if (this.state.edit === true) {
      const oldFriend = {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email,
        likes: this.state.likes,
      }

      this.props.put(id, oldFriend);

      this.setState({
        name: '',
        age: '',
        email: '',
        likes: '',
        edit: false,
      });
    }
  }

  render() {
    const { name, id, age, email, likes } = this.props;
    const inputField = property => <input 
      name={property}
      type="text"
      value={this.state[property]}
      size={this.state[property].toString().length - 1}
      onChange={(e) => this.onChangeHandler(e)}
    />;

    return (
      <div className="friend flex justify-between ph2 pt2 ma3">
        <span>I'm {this.state.edit ? inputField(`name`) : `${name} `} 
          and I'm {this.state.edit ? inputField(`age`) : `${age} `} 
          years old. I like{` `} 
          {this.state.edit ? inputField(`likes`) : ` ${likes}!`}</span>
        <div className="button-div">
          <i onClick={() => this.editFields(id)} className="fas fa-pencil-alt mh2"></i>
          <i onClick={() => this.props.delete(id)} className="fas fa-eraser mh2"></i>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("Friends.js mapStateToProps", state);
  return {
    friends: state.friends,
    status: state.loading,
  }
}

export default connect(mapStateToProps, { putFriend, deleteFriend })(Friends);