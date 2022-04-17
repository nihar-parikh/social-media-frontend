import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null, //or {}
    suggestions: [],
    othersFriends: [],
    requests: [],
    allFriends: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    signUpStart: (state, action) => {
      state.isFetching = true;
      state.error = false;
      //no action required...u can remove action
    },
    signUpSuccess: (state, action) => {
      state.isFetching = false;
      console.log(action.payload);
      state.currentUser = action.payload;
    },
    signUpFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      //no action required...u can remove action
    },

    loginStart: (state, action) => {
      state.isFetching = true;
      state.error = false;
      //no action required...u can remove action
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      //no action required...u can remove action
    },
    getAllFriendsStart: (state, action) => {
      state.isFetching = true;
      state.error = false;
      //no action required...u can remove action
    },
    getAllFriendsSuccess: (state, action) => {
      state.isFetching = false;
      state.allFriends = action.payload;
    },
    getAllFriendsFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      //no action required...u can remove action
    },

    getAllOthersFriendsStart: (state, action) => {
      state.isFetching = true;
      state.error = false;
      //no action required...u can remove action
    },
    getAllOthersFriendsSuccess: (state, action) => {
      state.isFetching = false;
      state.othersFriends = action.payload;
    },
    getAllOthersFriendsFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      //no action required...u can remove action
    },
    suggestionsStart: (state, action) => {
      state.isFetching = true;
      state.error = false;
      //no action required...u can remove action
    },
    suggestionsSuccess: (state, action) => {
      state.isFetching = false;
      state.suggestions = action.payload;
    },
    suggestionsFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      //no action required...u can remove action
    },
    requestsStart: (state, action) => {
      state.isFetching = true;
      state.error = false;
      //no action required...u can remove action
    },
    requestsSuccess: (state, action) => {
      state.isFetching = false;
      state.requests = action.payload;
    },
    requestsFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      //no action required...u can remove action
    },

    logout: (state, action) => {
      state.currentUser = null;
      state.error = false;
    },
  },
});

export const {
  signUpStart,
  signUpSuccess,
  signUpFailure,
  loginStart,
  loginSuccess,
  loginFailure,
  getAllFriendsStart,
  getAllFriendsSuccess,
  getAllFriendsFailure,
  getAllOthersFriendsStart,
  getAllOthersFriendsSuccess,
  getAllOthersFriendsFailure,
  requestsStart,
  requestsSuccess,
  requestsFailure,
  suggestionsStart,
  suggestionsSuccess,
  suggestionsFailure,

  logout,
} = userSlice.actions;

const userReducer = userSlice.reducer; //it should be export default
export default userReducer;
