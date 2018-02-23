import React from 'react';
import FriendList from 'FriendList';
import 
class FriendForm extends React.Component {
  // method 1: put state in class component but outside render
  state={
    friends:[]
  }
  
  render() {  //'render' MUST be lower case to be recognized by React!!!!
    return (
      <form>
        <label>Name</label>
        <input type="text" 
        value={this.state.name} 
        onChange={this.handleInputChange}
        />

        <label>Age</label>
      <input type="number"/>    {/* Making type a 'number' will not convert it from string coming back from the form*/}

        <label>Email</label>
        <input type="email"/>  {/* changing type to email gets help from browser */}

        <button type="submit">Add New Friend</button>
        {/* everything you grab from the server will be a string.  The server will typically handle the conversion of age to a number. */}
      </form>
    );
  }

  //helpers

  // handleInputChange will change state.  setState() causes App to re-render.
  handleInputChange = (event) => { 
    console.log(event.target.value)
    this.setState({ name: event.target.value })
  }
}
export default FriendForm;
// React recommends getting value from controlled components.  It's called controlled because the value comes from state into the component.  The 'value' property sets the the value of the attribute.