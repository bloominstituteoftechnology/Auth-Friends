import React, {Component} from "react";
import {connect} from "react-redux";
import {updateFriendList} from "./TestActions";

 class Form extends Component {
    constructor() {
        super();
        this.state = {
          name: "",
          age:"",
          email:""
        };
      }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value 
        });
    };

    submitHandler = (event) => {
        event.preventDefault();
        this.props.updateFriendList(this.state)
        .then(res => {
            if(res){
                this.setState({
                    name: "",
                    age:"",
                    email:""
                  })
            }
        })
    };

    render(){
        return(
            <form action="#" onSubmit={this.submitHandler}>
                Name: <input name="name" onChange={this.changeHandler} placeholder="Name" value={this.state.name}required />
                Age: <input name="age" onChange={this.changeHandler} placeholder="Age" value={this.state.age}required />
                Email: <input name="email" onChange={this.changeHandler} placeholder="Email" value={this.state.email}required />
                <button>Add Friend</button>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        clearForm:state.clearForm,
        error:state.error
    }
  }
  
export default connect(mapStateToProps,{updateFriendList})(Form);
// export default connect(mapStateToProps,{updateFriendList,formAction})(Form);
// export default connect(mapStateToProps,{curriedFunc})(Form);