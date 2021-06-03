import {
    GET_USERPROFILE,
    PROFILE_LOADING,
    CLEAR_CURRENT_PROFILE,
    GET_PROFILES
} from "../actions/types";
import { stat } from "fs";
const initialstate = {
    profile: null,
    profiles: null,
    loading: false
};

export default function(state = initialstate, action) {
    switch (action.type) {
        case PROFILE_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_USERPROFILE:
            return {
                ...state,
                profile: action.payload,
                loading: false
            };
        case GET_PROFILES:
            return {
                ...state,
                profiles: action.payload,
                loading: false
            };
        case CLEAR_CURRENT_PROFILE:
            return {
                ...state,
                profile: null
            };
        default:
            return state;
    }
}
