import axios from "axios";
import {
  getAllFriendsFailure,
  getAllFriendsStart,
  getAllFriendsSuccess,
  getAllOthersFriendsFailure,
  getAllOthersFriendsStart,
  getAllOthersFriendsSuccess,
  loginFailure,
  loginStart,
  loginSuccess,
  requestsFailure,
  requestsStart,
  requestsSuccess,
  signUpFailure,
  signUpStart,
  signUpSuccess,
  suggestionsFailure,
  suggestionsStart,
  suggestionsSuccess,
} from "./userRedux";

export const signUpUser = async (user, dispatch) => {
  console.log("userInfo: ", user);
  dispatch(signUpStart());

  try {
    const res = await axios.post("http://localhost:8000/api/users/signup", user);
    console.log("response: ", res.data);
    if (res.data) {
      localStorage.setItem("token", res.data.token);

      dispatch(signUpSuccess(res.data));
    } else {
      dispatch(signUpFailure());
    }
  } catch (error) {
    console.log("error:", error);
    dispatch(signUpFailure());
  }
};

export const login = async (dispatch, userInfo) => {
  //console.log("userInfo: ", userInfo);
  dispatch(loginStart());

  try {
    const res = await axios.post(
      "http://localhost:8000/api/users/login",
      userInfo
    ); //don't use {userInfo:userInfo} bcoz already userInfo is an object
    console.log("response: ", res.data);
    // console.log(res.data.token);
    localStorage.setItem("token", res.data.token);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    //console.log("error:", error);
    dispatch(loginFailure());
  }
};

export const getAllFriends = async (dispatch, currentId) => {
  dispatch(getAllFriendsStart());

  try {
    const res = await axios.get(
      `http://localhost:8000/api/users/friends/${currentId}`,

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    // console.log("response: ", res.data);
    dispatch(getAllFriendsSuccess(res.data));
  } catch (error) {
    //console.log("error:", error);
    dispatch(getAllFriendsFailure());
  }
};

export const getAllOthersFriends = async (dispatch, friendId) => {
  dispatch(getAllOthersFriendsStart());

  try {
    const res = await axios.get(
      `http://localhost:8000/api/users/others-friends/${friendId}`
    );
    // console.log("response: ", res.data);
    dispatch(getAllOthersFriendsSuccess(res.data));
  } catch (error) {
    //console.log("error:", error);
    dispatch(getAllOthersFriendsFailure());
  }
};

export const getAllRequests = async (dispatch, currentId) => {
  dispatch(requestsStart());

  try {
    const res = await axios.get(
      `http://localhost:8000/api/users/requests/${currentId}`,

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    // console.log("response: ", res.data);
    dispatch(requestsSuccess(res.data));
  } catch (error) {
    //console.log("error:", error);
    dispatch(requestsFailure());
  }
};

export const getSuggestions = async (dispatch, currentId) => {
  dispatch(suggestionsStart());

  try {
    const res = await axios.get(
      `http://localhost:8000/api/users/suggestions/${currentId}`
    );
    // console.log("response: ", res.data);
    dispatch(suggestionsSuccess(res.data));
  } catch (error) {
    console.log("error:", error);
    dispatch(suggestionsFailure());
  }
};

export const acceptRequest = async (incomingId, currentId, dispatch) => {
  // console.log(incomingId, currentId);
  dispatch(requestsStart());
  try {
    const res = await axios.put(
      `http://localhost:8000/api/users/${currentId}/accept`,
      { userId: incomingId },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    console.log(res.data);
    dispatch(requestsSuccess(res.data.requests));
  } catch (error) {
    console.log(error);
    dispatch(requestsFailure());
  }
};

export const declineRequest = async (incomingId, currentId, dispatch) => {
  // console.log(incomingId, currentId);
  dispatch(requestsStart());

  try {
    const res = await axios.put(
      `http://localhost:8000/api/users/${currentId}/decline`,
      { userId: incomingId },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    // console.log(res.data);
    dispatch(requestsSuccess(res.data.requests));
  } catch (error) {
    console.log(error);
    dispatch(requestsFailure());
  }
};

export const newRequest = async (incomingId, currentId, dispatch) => {
  try {
    const res = await axios.post(
      `http://localhost:8000/api/users/${currentId}/request`,
      { userId: incomingId },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
