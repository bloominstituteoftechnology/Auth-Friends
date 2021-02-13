import React from 'react';
import axios from 'axios';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
    state = {
        Friends: []
    };

    componentDidMount() {
        this.getData();
    };

    getData = () => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
          .then(res => {
              console.log("AM: FriendsList.js: getData: res: ", res);
          })
          .catch(err => console.error("Unable to retrieve data: ", err.message));
    };


    
    render() {
        return (
            <div>
                <h1>Here Are Your Friends</h1>
            </div>
        );
    };
};

export default FriendsList;