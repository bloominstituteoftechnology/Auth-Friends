import React from 'react'
import { connect } from 'react-redux'
import { addFriend } from '../actions'


const AddFriend = props => {
    return (
        <div>
            <form onSubmit={(event)=> { event.preventDefault(); props.addFriend(this.friendName, this.friendAge, this.friendEmail)}}>
                    <input type="text" ref={(friendName) => this.friendName = friendName} />
                    <input type="text" ref={(friendAge) => this.friendAge = friendAge} />
                    <input type="text" ref={(friendEmail) => this.friendEmail = friendEmail} />
                <button type="submit" value="Add Friend"> Add Friend </button>
        </form>
        </div>
    )
}
const mapStateToProps = state => {
    return {
      friends: state.friends,
    }
  }
export default connect(mapStateToProps, { addFriend })(AddFriend)
