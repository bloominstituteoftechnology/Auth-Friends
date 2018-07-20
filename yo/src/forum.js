import React, { Component } from 'react';

class InputForum extends Component {
constructor(props){
	super(props);
	this.state={
	name:'',
	age:'',
	email:''
	};
}

changeHandler = (event) => {
	this.setState({[event.target.placeholder]:event.target.value});
};

nonSubmit = (event) => {
	event.preventDefault();
};

submitHandler = (event) => {
	event.preventDefault();
	const friend = {name:this.state.name,age:this.state.age,email:this.state.email};
	this.props.addFriend(friend);
	this.setState({name:'',age:'',email:''});
};
//takes state values, creates a 'friend' object, and passes friend in as props
//to the addFriend function.

render(){
	return(
	<div className="formGroup">
	<form>
	<div>
	name:
	<input type="text" placeholder="name" value={this.state.name} onChange={this.changeHandler} onSubmit={this.nonSubmit} />
	</div><div>
	age:
	<input type="text" placeholder="age" value={this.state.age} onChange={this.changeHandler} onSubmit={this.nonSubmit} />
	</div><div>
	e-mail:
	<input type="text" placeholder="email" value={this.state.email} onChange={this.changeHandler} onSubmit={this.nonSubmit} />
	</div>
	<button onClick={this.submitHandler}>submit!</button>
	</form>
	</div>
	);
	}
};

export default InputForum;