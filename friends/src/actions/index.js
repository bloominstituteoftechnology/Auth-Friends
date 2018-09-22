import axios from 'axios';

export const UPDT_FLD = "UPDT_FLD";

export const FRD_FTH_IP = "FRD_FTH_IP";
export const FRD_FTH_SCS = "FRD_FTH_SCS";
export const FRD_FTH_FLR = "FRD_FTH_FLR";
export const FRD_AD_IP = "FRD_AD_IP";
export const FRD_AD_SCS = "FRD_AD_SCS";
export const FRD_AD_FLR = "FRD_AD_FLR";

export const updtfld = () => {
    return {}
}

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

export const frdAd = frd_idv => dispatch => {
    dispatch({ type: FRD_AD_IP });
    axios
        .post("http://localhost:5000/api/friends", frd_idv)
        .then(response => {
            dispatch({
                type: FRD_AD_SCS,
                payload: response.data
            });
        })
        .catch(err => {
            dispatch({
                type: FRD_AD_FLR,
                payload: err
            });
        });
}