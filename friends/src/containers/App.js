import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { frdFth, frdAd } from '../actions';
import FrdLst from '../components/FrdLst';

class App extends Component {
  state = {
      frd_idv: {
        name: "",
        age: Number,
        email: ""
      }
    }
  componentDidMount() {
    this.props.frdFth();
  }

  hdliptchg = event => {
    this.setState({
      frd_idv: {
        ...this.state.frd_idv,
        [event.target.name]: event.target.value
      }
    })
  }

  hdlnwfrd = event => {
    event.preventDefault();
    this.props.frdAd(this.state.frd_idv);
  }

  render() {
    return (
      <div className="App">
        {this.props.frds_fthg ? (
          <h2>Loading...</h2>
        ) : (
          <div>
            <FrdLst {...this.props} />
            <form>
              <input type="text" name="name" placeholder="Name" value={this.state.frd_idv.name} onChange={this.hdliptchg} />
              <input type="number" name="age" placeholder="Age" value={this.state.frd_idv.age} onChange={this.hdliptchg} />
              <input type="email" name="email" placeholder="Email" value={this.state.frd_idv.email} onChange={this.hdliptchg} />
              <button onClick={(event) => this.hdlnwfrd(event)}>Add New</button>
            </form>
          </div>
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

export default connect(mapStateToProps, { frdFth, frdAd })(App);
