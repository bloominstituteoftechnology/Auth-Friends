import React, { Component } from 'react';

class Form extends Component {
    constructor(props)  {
        super(props)
        this.state = {
            nameValue: "",
            emailValue: "",
            ageValue: null,
        }
    }

    onChangeHandler = ({ target })    =>  {
        console.log(target);
        let content;
        if(target.name === "age")   {
            content = parseInt(target.value);
        }   else {
            content = target.value;
        }
        this.setState((state)   =>  ({
            [`${target.name}Value`]: content,
        }))
    }

    submitHandler = ()  =>  {
        this.props.addFriend({name: this.state.nameValue, email: this.state.emailValue, age: this.state.ageValue});
        this.setState((state)   =>  ({
            nameValue: "",
            emailValue: "",
            ageValue: null,
        }))
    }

    render()   {
        return(
            <div>
                <input placeholder="name" name="name" value={this.state.nameValue} onChange={this.onChangeHandler}></input>
                <input placeholder="email" name="email" value={this.state.emailValue} onChange={this.onChangeHandler}></input>
                <input placeholder="age" name="age" value={this.state.ageValue} onChange={this.onChangeHandler}></input>
                <div onClick={this.submitHandler}>Submit</div>
            </div>
        )
    }
}

export default Form;
