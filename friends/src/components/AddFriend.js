import React from 'react'
import { connect } from 'react-redux'
import { addFriend } from '../actions'


const AddFriend = props => {
    return (
        <div>
            <form onSubmit={(event) => { props.addFriend(this.input.value); event.preventDefault(); this.input.value = ''}}>
                    <input type="text" ref={(name) => this.input = name} />
            </form>
            <form onSubmit={(event) => { props.addFriend(this.input.value); event.preventDefault(); this.input.value = ''}}>
                    <input type="text" ref={(age) => this.input = age} />
            </form>
            <form onSubmit={(event) => { props.addFriend(this.input.value); event.preventDefault(); this.input.value = ''}}>
                    <input type="text" ref={(input) => this.input = input} />
            </form>
                <button onClick={() => props.addFriend} type="submit" value="Add Friend"> Add </button>

        </div>
    )
}
const mapStateToProps = state => {
    return {
      friends: state.friends,
    }
  }
export default connect(mapStateToProps, { addFriend })(AddFriend)
