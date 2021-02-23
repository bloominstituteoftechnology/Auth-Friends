import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friend from './Friend'

function FriendsList() {
  const [ friends, setFriends ] = useState([]);

  useEffect(() => {
    getFriendsList();
  }, [])

  const getFriendsList = () => {
    // const token = JSON.parse(localStorage.getItem("token"));
    axiosWithAuth()
      .get('/api/friends')
      .then((res) => {
        setFriends(res.data)
      })
      .catch((err) => {
        alert(err)
      })
  }

  const clickHandler = (e) => {
   console.log('ive been clicked')
        }

  return (
    <div>
    {friends.map((friend) => {
      return (
        <>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            {friend.name}
          </button>
          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                    {<Friend friend={friend} />}
                    </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    })}
  </div>
  )
}

export default FriendsList



