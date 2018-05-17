import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { FETCH_AVENGERS, FETCHING_AVENGERS } from '../Actions'
import {fetchAvengers} from '../Actions'

class DisplayList extends Component{

componentDidMount() {
    this.props.fetchAvengers();
}



//   refreshFriends = (response) => {
//     this.setState(() => ({ friends: response.data }));
//   }

  render(){

    return(
        <div>
            <ul>
            {this.props.avengers.map(char => {
              {console.log('achar',char)}
              return <li key={char.name}>{char.name} </li>;
              
            })}
          </ul>
        </div>
    )
    
  }

}

const mapStateToProps = state => {
    console.log(state);
    return {
      avengers: state.avengers,
      fetching: state.fetching
    };
  };

  export default connect(mapStateToProps, {
    fetchAvengers 
  })(DisplayList);