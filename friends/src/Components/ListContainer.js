import React from 'react'
import { fetchFriends,deleteFriend } from '../Actions/index'
import { connect } from "react-redux";
import styled from 'styled-components';
import Friend from '../Components/Friend'

const Loading = styled.h1`
    font-size:4rem;
`

class ListContainer extends React.Component {

    componentDidMount(){
        //fetch data
        this.props.fetchFriends();
    }
    handleDeleteFriend = (event,id) =>{
        event.preventDefault();
        this.props.deleteFriend(id);
    }
    render(){

        if(this.props.isFetching){
            return <Loading>FETCHING!!!</Loading>
        } else {
            return (
                <div>
                    {
                        this.props.friendsList.map(el=>{
                            return <Friend key={el.id} handleDeleteFriend={this.handleDeleteFriend} data={el}/>
                        })
                    }
                </div>
            )
        }

    }
}


const mapStateToProps = state => {
    return {
        isFetching:state.friendsReducer.isFetching,
        friendsList:state.friendsReducer.friends
    };
  };

  export default connect(mapStateToProps,{ fetchFriends,deleteFriend })(ListContainer);
  
