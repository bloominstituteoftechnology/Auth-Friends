import { getFriends} from '../actions';
import Friend from './friend';
import Loader from 'react-loader-spinner';
import React, {useEffect} from 'react';
import { connect } from 'react-redux';

function FriendsList(props) {

    const { getFriends} = props;

    useEffect(() => {
        getFriends();
    }, [getFriends])

    
    return (
   
        <div className = 'smurfs-list'>
            {props.isFetching && (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      )}
            { props.friends.map( (each, index) =>
             <Friend key = {index}  each ={each} />
                )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        friends: state.friends,
        isFetching: state.isFetching,
        error: state.eroor
    }
}


export default connect(mapStateToProps, {getFriends})(FriendsList)

