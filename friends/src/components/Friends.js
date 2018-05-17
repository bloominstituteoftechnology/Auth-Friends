import React from 'react';
import logo from './logo.svg';
// Redux
import { connect } from 'react-redux';
// Redux--Actions
import { deleteFriend } from '../actions';

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


  editFields = () => {
    const { name, age, email, likes } = this.props;
    this.setState({edit: !this.state.edit });
  }

  render() {
    const { name, id, age, email, likes } = this.props;
    const inputField = property => <input 
      type="text"
      value={[property]}
    />;

    return (
      <div className="friend flex justify-between ph2 pt2 ma3">
        <span>I'm {this.state.edit ? inputField(name) : `${name} `} 
          and I'm {this.state.edit ? inputField(age) : `${age} `} 
          years old. I like {likes}!</span>
        <div className="button-div">
          <i onClick={this.editFields} className="fas fa-pencil-alt mh2"></i>
          <i onClick={()=> this.props.delete(id)} className="fas fa-eraser mh2"></i>
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

export default connect(mapStateToProps, { deleteFriend })(Friends);