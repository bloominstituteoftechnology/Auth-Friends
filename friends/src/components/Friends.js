import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getData } from '../actions'

class Friends extends React.Component {
    componentDidMount() {
        this.props.getData();
    }

    render () {
        // if (this.props.fetchingData) {
        //     <h2>Fetching friends list . . .</h2>
        //   }
        return (
            console.log(this.props.friends),
            <div className='friends-list'>
                <h2>Friends list</h2>
                {this.props.friends.map(friend => {
                    console.log(friend)
                return (
                  <div className='friend-item' key={friend.id}>
                      <h1>{friend.name}</h1>
                      <p>{friend.age}</p>
                      <p>{friend.email}</p>
                  </div>
                )
            })}
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.friends,
        error: state.error,
        fetchingData: state.fetchingData
    }
}



export default withRouter(connect(mapStateToProps, {getData} )(Friends))