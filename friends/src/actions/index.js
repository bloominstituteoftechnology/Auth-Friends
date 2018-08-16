import axios from 'axios';
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';
export const ADDING = 'ADDING';
export const ADDED = 'ADDED';
export const DELETED = 'DELETED';
export const DELETING = 'DELETING';

export const fetching = () => {

    return (dispatch) => {
      dispatch({type: FETCHING});
      axios.get('http://localhost:5000/api/friends')
      .then((response) => {
        dispatch({type: FETCHED, payload: response.data});
      })
      .catch(error => {
          console.log(error);
        dispatch({type: ERROR});
      });
    };
  };

export const add = (friend) => {

    return (dispatch) => {
        dispatch({type: ADDING});
        axios.post('http://localhost:5000/api/friends', friend)
        .then(response => new Promise(resolve => {
            setTimeout(() => {
                resolve(dispatch({type: ADDED, payload: response.data}));
            }, 1000);
        })
    )
         .catch(error => {
            console.log(error);
            dispatch({type: ERROR});
        });
    };
};


export const deleteFriend = (id) => {
    return(dispatch) => {
    axios.delete(`http://localhost:5000/api/friends/${id}`)
    .then((response) => {
        dispatch({type: DELETED, payload: response.data});
      }
    )
     .catch(error => {
          console.log(error);
        dispatch({type: ERROR});
      }
    );
    };
  };


  


   