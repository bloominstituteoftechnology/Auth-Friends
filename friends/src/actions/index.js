import axios from "axios";

export const ACTION = 'ACTION';

export const fetchingFriends = () => {
    const getData = axios.get('http://localhost:5000/api/friends');
}