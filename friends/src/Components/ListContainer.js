import React from 'react'
import { fetchFriends } from '../Actions/index'


class ListContainer extends React.Component {

    componentDidMount(){
        //fetch data
        this.props.fetchData();
    }

    render(){
        console.log('i got props... ',props)
        return (
            <div>
                {
                    
                }
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        isFetching:this.state.isFetching,
        friendsList:this.state.friends
    };
  };

  export default connect(mapStateToProps,{ fetchFriends })(ListContainer);
  
