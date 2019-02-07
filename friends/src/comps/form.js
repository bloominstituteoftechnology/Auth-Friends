import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
    };
  }

  gatherInput = e => {
    this.setState({[e.target.id]: e.target.value});
  };

  submitNewFriend = e => {
    e.preventDefault();
    let newFriend = {...this.state};
    newFriend.id = this.props.id;
  };

  render() {
    return (
      <div className="formCont">
        <form className="form">
          <h2 className="formHead">Add Friend</h2>
          <div className="nameCont">
            <label htmlFor="name">Name: </label>
            <input id="name" type="text" onChange={this.gatherInput} />
          </div>
          <div className="age">
            <label htmlFor="age">Age: </label>
            <input id="age" type="text" onChange={this.gatherInput} />
          </div>
          <div className="email">
            <label htmlFor="email">Email: </label>
            <input id="email" type="email" onChange={this.gatherInput} />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
