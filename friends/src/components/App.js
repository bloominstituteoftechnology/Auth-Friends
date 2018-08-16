import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/App.css';
import {getFriends} from '../actions';
import styled from 'styled-components';

const AppDiv = styled.div `
  ${'' /* border: 1px solid red; */}
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  .list {
    ${'' /* border: 1px solid green; */}
    text-align: center;
  }
  .status {
    ${'' /* border: 1px solid blue; */}
  }
`;

class App extends Component {
  componentDidMount() {
    console.log("CDM", this)
    this.props.getFriends();
  }
  render() {
    console.log(this.props)
    return (<AppDiv>

      <div className="list">
        <h2>Friends List: </h2>
        <div className="status">{this.props.state.friendsReducer.status}</div>
        {
          (this.props.state.friendsReducer.isFetched)
            ? (this.props.state.friendsReducer.friends.map(friend => {
              return (<div key={friend.id}>
                {friend.name}
              </div>)
            }))
            : null
        }
      </div>

    </AppDiv>);
  }
}

const mapStateToProps = state => {
  return {state: state};
};

const mapDispatchToProps = {
  getFriends
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
