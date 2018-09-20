import axios from 'axios';

export const FRD_FTH_IP = "FRD_FTH_IP";
export const FRD_FTH_SCS = "FRD_FTH_SCS";
export const FRD_FTH_FLR = "FRD_FTH_FLR";

export const frdFth = () => dispatch => {
    dispatch({ type: FRD_FTH_IP });
    axios
        .get("http://localhost:5000/api/friends")
        .then(response => {
            dispatch({
                type: FRD_FTH_SCS,
                payload: response.data
            });
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: FRD_FTH_FLR,
                payload: err
            });
        });
}