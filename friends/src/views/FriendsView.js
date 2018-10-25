import React from 'react';
import { connect } from 'react-redux';

import Friends from '../components/Friends';
import { fetchData } from '../actions';

class FriendsView extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.fetchData();
    }
    render(){
        if(this.props.fetching){
            return <h1>GETIING DATA</h1>
        }else{
            return(
                <div className="friendsWrapper">
                    <Friends friends={this.props.friends} />
                </div>
            );
        }
    }



}
const mapStateToProps = state => {
    return {
        friends: state.friends,
        error: state.error,
        friendsFetched: state.friendsFetched
    }
}
export default connect(
    mapStateToProps,
    { fetchData }
)(FriendsView);
