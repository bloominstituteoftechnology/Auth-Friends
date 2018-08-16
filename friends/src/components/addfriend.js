import React, {Component} from 'react';
import '../addform.css';
import { add } from '../actions';
import { connect } from 'react-redux';

class Addform extends Component {
    constructor(){
        super();
        this.state = {
            name: null,
            age: null,
            email: null,
            pic: "https://vignette.wikia.nocookie.net/smurfs/images/a/a2/Male_Smurf_Comic_Book.jpg/revision/latest?cb=20110914021916"
        }
    }
   
    saveFren = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <div>
                {this.props.addingFriend ? (
          <div className="formy2">Adding friend..<i className="fas fa-spinner fa-pulse"></i></div>
        ) : (
                <form className="formy" onSubmit=
                {(event)=> {
                event.preventDefault(); 
                this.props.add(this.state);
                }}>
                    <h2>Make a ~new~ friend</h2>
                    <input name="name" onChange={this.saveFren} placeholder="Name" />
                    <input name="age" onChange={this.saveFren} placeholder="Age" />
                    <input name="email" onChange={this.saveFren} placeholder="Email" />
                    <button type="submit">Add Frend!</button>
        </form>)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friends,
        addingFriend: state.addingFriend,
        friendAdded: state.friendAdded,
        error: state.error

    };
  };
  
  export default connect(mapStateToProps, {add})(Addform);

