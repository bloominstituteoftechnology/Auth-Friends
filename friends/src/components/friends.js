import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions/actions';

class Friends extends Component {
    componentDidMount() {
        this.props.getFriends();
    }
}