import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { frdFth } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.frdFth();
  }
  render() {
    return (
      <div className="App">
        {this.props.frds_fthg ? (
          <h2>Loading...</h2>
        ) : (
          <ul>
            {this.props.frds_arr.map(frd => {
              return <li key={frd.id}>{frd.name}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    frds_fthg: state.frdReducer.frds_fthg,
    frds_fthd: state.frdReducer.frds_fthd,
    frds_svd: state.frdReducer.frds_svd,
    frds_svg: state.frdReducer.frds_svg,
    frds_updtg: state.frdReducer.frds_updtg,
    frds_updtd: state.frdReducer.frds_pdtd,
    frds_dltg: state.frdReducer.frds_dltg,
    frds_dltd: state.frdReducer.frds_dltd,
    frds_arr: state.frdReducer.frds_arr,
    err: state.frdReducer.err
  }
}

export default connect(mapStateToProps, { frdFth })(App);
