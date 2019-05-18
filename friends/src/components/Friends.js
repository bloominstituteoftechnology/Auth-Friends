import React from 'react'
import Friend from './Friend';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {getFriends} from "../actions"
import { withRouter } from 'react-router-dom';




class Friends extends React.Component {

    componentDidMount() {
        this.props.getFriends();
    }


    render() {
        console.log(`in render fetching status: ${this.props.fetching}`)
        console.log(`in render friends array: ${this.props.friends}`)
        return (
            <div className="friends">
                {this.props.fetchingData && (
                        <p>Loading Data...</p>
                )}

                {this.props.friends && (this.props.friends.map(friend => (
                    <div className='friend' key={friend.id}>
                        <Friend friend={friend} />
                    </div>)
                ))}
                
            </div>
            
        )
    }

    

}

Friends.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        age: PropTypes.number,
        email: PropTypes.string
    }))
}

// const mapStateToProps = ({ friends, fetchingData}) => ({
//     friends,
//     fetchingData
// })

const mapStateToProps = state => ({
    
        friends: state.friends.friends,
        fetchingData: state.friends.fetchingData
    
})


export default withRouter(connect (mapStateToProps, {getFriends})(Friends));