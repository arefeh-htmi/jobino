import axios from "axios";
import {
    GET_USERPROFILE,
    PROFILE_LOADING,
    GET_ERRORS,
    CLEAR_CURRENT_PROFILE,
    GET_PROFILES
} from "./types";

//getting current profile
export const getProfile = () => dispatch => {
    //dispatching loading state before req
    dispatch(profileLoading());
    axios
        .get("/api/userprofile")
        .then(res =>
            dispatch({
                type: GET_USERPROFILE,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_USERPROFILE,
                payload: {}
            })
        );
};

// Create Profile
export const createProfile = (profileData, history) => dispatch => {
    axios
        .post("/api/userprofile", profileData)
        .then(res => history.push("/dashboard"))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};
export const addExp = (experienceData, history) => dispatch => {
    axios
        .post("/api/userprofile/experience", experienceData)
        .then(res => history.push("/dashboard"))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

export const deleteExperience = id => dispatch => {
    axios
        .delete(`/api/userprofile/experience/${id}`)
        .then(res =>
            dispatch({
                type: GET_USERPROFILE,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};
//loading the profile
export const profileLoading = () => {
    return {
        type: PROFILE_LOADING
    };
};
//clearing profile
export const clearcurrentprofile = () => {
    return {
        type: CLEAR_CURRENT_PROFILE
    };
};

//getting profiles
export const getProfiles = () => dispatch => {
    dispatch(profileLoading());
    axios
        .get("/api/userprofile/all")
        .then(res =>
            dispatch({
                type: GET_PROFILES,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_PROFILES,
                payload: null
            })
        );
};

//getting profile by profile name
export const getProfileByName = profilename => dispatch => {
    dispatch(profileLoading());
    axios
        .get(`/api/userprofile/profilename/${profilename}`)
        .then(res =>
            dispatch({
                type: GET_USERPROFILE,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_USERPROFILE,
                payload: null
            })
        );
};
