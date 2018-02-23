import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {getFriends} from './actions/Friends';
import Friends from './components/Friends';
import FormFriend from './components/FormFriend';
import {Grid, Col} from 'react-bootstrap'
import {updateSingleFriend} from './actions/Friends';

class App extends Component {

    componentDidMount() {
        this.props.getFriends();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-Title">Friends</h1>
                </header>
                <Grid>
                    <Col>
                        {this.props.error ? <h3>Error Fetching Friends</h3> : null}

                        <div className="Flex-Container">
                            {this.props.fetching
                                    ?  <img src={logo} className="App-logo" alt="logo"/>
                                    :  this.props.updateVisible
                                            ? <FormFriend/>: <Friends friends={this.props.friends}/>
                            }
                        </div>

                    </Col>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {friends_reducer} = state;
    return {
        friends: friends_reducer.friends,
        error: friends_reducer.error,
        fetching: friends_reducer.fetching,
        fetched: friends_reducer.fetched,
        updateF: friends_reducer.singleFriend,
        updateVisible: friends_reducer.updateVisible,
    }
};

export default connect(mapStateToProps, {getFriends, updateSingleFriend})(App);
