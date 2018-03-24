import React, {Component} from 'react';

class NewFriend extends Component{
  constructor(props){
    super(props);
    this.handleName = this.handleName.bind(this);
    this.handleAge= this.handleAge.bind(this);
    this.handleEmail= this.handleEmail.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);

    this.state = {
      name:'name',
      age:'age',
      email:'email'
    }

  }

  handleName(event){
    if(event.target.value.slice(0,4) === 'name'){
      let temp = event.target.value.slice(4,5);
      this.setState({name:temp});
    }
    else{
      this.setState({name:event.target.value});
    }
  }
  handleAge(event){
      if(event.target.value.slice(0,3) === 'age'){
        let temp = event.target.value.slice(3,4);
        this.setState({age:temp});
      }
      else{
        this.setState({age:event.target.value});
      }
    }
  handleEmail(event){
    if(event.target.value.slice(0,5) === 'email'){
        let temp = event.target.value.slice(5,6);
        this.setState({email:temp});
      }
      else{
        this.setState({email:event.target.value});
      }
     } 
   handleSubmit(event){
     let id;
     let length = this.props.friends.info.friends.length;
     if(length > 0){
       id = this.props.friends.info.friends[length -1].id + 1;
     }
     else{
       id = 1;
     }
     this.props.friends.fetchFriends(this.state.name,this.state.age,this.state.email,id);
     this.setState({name:'',age:'',email:''});
     event.preventDefault();
   }
  render(){
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleName} type="text" value={this.state.name}/>
        <input onChange={this.handleAge} type="text" value={this.state.age}/>
        <input onChange={this.handleEmail} type="text" value={this.state.email}/>
        <input type="submit" value="submit"/>
      </form>
    </div>
    );
  }
}


export default NewFriend;
