import {  FRD_FTH_IP, FRD_FTH_SCS, FRD_FTH_FLR } from '../actions';

const initialState = {
    frds_fthg: false,
    frds_fthd: false,
    frds_svd: false,
    frds_svg: false,
    frds_updtg: false,
    frds_updtd: false,
    frds_dltg: false,
    frds_dltd: false,
    frds_arr: [],
    err: null
}

export const frdReducer = (state = initialState, action) => {
    switch (action.type) {
        case FRD_FTH_IP:
            return Object.assign({}, state, { frds_fthg: true });
        case FRD_FTH_SCS:
            return Object.assign({}, state, {
                frds_fthg: false,
                frds_fthd: true,
                frds_arr: [...state.frds_arr, ...action.payload]
            });
        case FRD_FTH_FLR:
            return Object.assign({}, state, {
                frds_fthg: false,
                err: "Error gathering information."
            });
        default:
            return state;
    }
}