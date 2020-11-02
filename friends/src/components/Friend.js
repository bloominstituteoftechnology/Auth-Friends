import React from 'react';
import {axiosWithAuth} from '../axiosWithAuth';
class Friend extends React.Component{
    constructor(){
        super();
        this.state={
            updatedFriend:{
                name:'',
                age:'',
                email:'',
                id:''
        }
    }}
componentDidMount(){
    this.getFriends()
}

getFriends=(()=>{
    axiosWithAuth()
    .get(`/friends/${this.props.match.params.id}`)
    .then(res=>this.setState({...this.state,updatedFriend:res.data}))
    .catch(err=>console.log(err))
})

editFriend=(()=>{
    axiosWithAuth()
    .put(`/friends/${this.props.match.params.id}`,this.state.updatedFriend)
    .then(res=>console.log(res)
        )
    .catch(err=>console.log(err));
  })

handleChange=((e)=>{
        this.setState({
            updatedFriend:{
                ...this.state.updatedFriend,[e.target.name]:e.target.value
            }
        })
  })

  handleSubmit=((e)=>{
    e.preventDefault();
    this.editFriend()
    this.props.history.push('/protected/friends',this.state.updatedFriend)
  })
    render(){
    console.log(this.props);
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='name' placeholder='name' value={this.state.updatedFriend.name} onChange={this.handleChange}/>
                <input type='text' name='age' placeholder='age' value={this.state.updatedFriend.age} onChange={this.handleChange}/>
                <input type='text' name='email' placeholder='email' value={this.state.updatedFriend.email} onChange={this.handleChange}/>
                <button>Save changes</button>
                {/* <Link to='/protected'><button>Friends List</button></Link> */}
            </form>
        </div>
    )}
}

export default Friend