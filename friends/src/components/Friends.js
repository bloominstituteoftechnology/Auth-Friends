import React, {Component} from 'react';
import { connect } from 'react-redux';
import Friend from './Friend';
import { fetch } from '../actions';

class FriendList extends Component {
    componentDidMount(){
        this.props.fetch();
    }

    render(){
        return(
            <div>
                <ul>
                {this.props.friends.map(friend =>
                        <Friend  friend={friend} key={Math.random()}/>
                    )}
                    </ul>
            </div>
            
        )
    }
}

const mapStateToProps  = state => {
    return{
        friends: state.friends,
    }
}
export default connect(mapStateToProps, {fetch})(FriendList)