import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {getFriends} from './actions/Friends';
import Friends from './components/Friends';


class App extends Component {

    componentDidMount() {
        this.props.getFriends();
        console.log('props from App/js ', this.props);
    }

    render() {
        const { friends } = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <Friends friends={friends}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friends,
        fetching: state.fetching,
        error: state.error
    };
};

export default connect(mapStateToProps, {getFriends})(App);
