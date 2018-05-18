import React from 'react';
// Redux
import { connect } from 'react-redux';
// Redux--Actions
import { postFriend } from '../actions';

class CreateFriendForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      email: '',
      likes: '',
      edit: false,
    }
  }

  handleTextChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  goPostFriend = (e) => {
    e.preventDefault();

    if (this.state.edit === false) this.setState({
      ...this.state,
      edit: true, 
    });

    if (this.state.edit === true) {
      
      const newFriend = {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email,
        likes: this.state.likes,
      };
      this.props.postFriend(newFriend);
      this.setState({
        name: '',
        age: '',
        email: '',
        likes: '',
        edit: false,
      })
    }
  }

  render() {
    const { name, id, age, email, likes } = this.props;
    const inputField = property => <input 
      name={property}
      type="text"
      value={this.state[property]}
      size={this.state[property].toString().length - 1}
      onChange={(e) => this.handleTextChange(e)}
    />;
    return (
      <form onSubmit={this.goPostFriend} className="friend flex justify-between ph2 pt2 ma3">
        { this.state.edit ? 
          <span>I'm {inputField(`name`)} 
            and I'm {inputField(`age`)} 
            years old. I like{` `} 
            {inputField(`likes`)}
          </span> :
          `Wanna add a new friend? Click on the pencil.`
        }
        <div className="button-div">
          <i type="submit" onClick={this.goPostFriend} className="fas fa-pencil-alt mh2"></i>
        </div>
      </form>
    );
  }
}

export default connect(null, { postFriend })(CreateFriendForm);