import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetching_friends } from './actions';



class FriendList extends Component{
    componentDidMount() {
        console.log(this.props)
        this.props.fetching_friends();
    }

    render(){
        //console.log(this.props.friends[0])
        return (
            <div>
                <ul>
                    {this.props.friends.map(char => {
                        return <li key={char.name}>{char.name}</li>;
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("mapStateToProps",state.Reducer.friends);
    console.log("mapStateFetchToProps", state.Reducer.fetching);
    return {
        friends: state.Reducer.friends,
        fetching: state.Reducer.fetching
    }
}

export default connect(mapStateToProps, { fetching_friends })(FriendList)