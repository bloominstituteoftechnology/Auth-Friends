import React, { Component } from 'react';
import styled from 'styled-components';
import '../actions/types.js';
import { FETCHING_FRIENDS, FETCHED_FRIENDS, SAVED_FRIENDS, ADDING_FRIEND, ADDED_FRIEND } from '../actions/types.js';

const initState = {
    fetchingFriends: false,
    fetchedFriends: false,
    savedFriends: false,
    savingFriends: false,
    addingFriend: false,
    addedFriend: false,
    updatingFriend: false,
    updatedFriend: false,
    deletingFriend: false,
    deletedFriend: false,
    friends: [],
    error: null
}

export const friendsList = (state = initState, action) => {
    switch (action.type) {
        case FETCHING_FRIENDS:
            return Object.assign({}, state, {fetchingFriends: true});
        case FETCHED_FRIENDS: 
            return Object.assign({}, state, {
                friends: [ ...state.friends, ...action.payload ],
                fetchingFriends: false,
                fetchedFriends: true,
            });
        case SAVING_FRIENDS: 
            return Object.assign({}, state, { savingFriends:true });
        case SAVED_FRIENDS:
            return Object.assign({}, state, {
                friends: [...state.friends, ...action.payload],
                savingFriends: false,
                savedFriends: true,
            });
        case ERROR:
            return state;
    }
}

export const singleFriend = (state, action) {
    switch(action.type){
        case ADDING_FRIEND:
            return Object.assign({}, state, {
                addingFriend: true,
            });
        case ADDED_FRIEND:
            return Object.assign({}, state, {
                addedFriend: true,
                addingFriend: false,
                friends: [ ...state.friends, action.payload ],
            });
        case 
    }
}
