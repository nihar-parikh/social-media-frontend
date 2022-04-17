import React, { useEffect, useState } from "react";
import {
  acceptRequest,
  declineRequest,
  getAllFriends,
  getAllOthersFriends,
  getAllRequests,
  getSuggestions,
  newRequest,
} from "../redux/apicalls";
import { useDispatch, useSelector } from "react-redux";

import "./Profile.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const currentId = useSelector((state) => state.user.currentUser._id);
  const friends = useSelector((state) => state.user.allFriends);
  const requests = useSelector((state) => state.user.requests);
  const suggestions = useSelector((state) => state.user.suggestions);
  const [request, setRequest] = useState(false);
  const [accept, setAccept] = useState(false);
  const [decline, setDecline] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [oneSugg, setOneSugg] = useState("");
  const [oneSuggId, setOneSuggId] = useState("");

  const [twoSugg, setTwoSugg] = useState("");
  const [twoSuggId, setTwoSuggId] = useState("");

  useEffect(() => {
    getAllFriends(dispatch, currentId);
    getAllRequests(dispatch, currentId);
  }, [dispatch, currentId]);

  const handleAccept = (incomingId) => {
    // console.log(incomingId);
    acceptRequest(incomingId, currentId, dispatch);
    getAllFriends(dispatch, currentId);
    getAllRequests(dispatch, currentId);
    setAccept(true);
    setTimeout(() => {
      setAccept(false);
    }, 2000);
  };

  const handleRequest = (incomingId) => {
    console.log(incomingId);
    newRequest(incomingId, currentId, dispatch);
    setRequest(true);
    setTimeout(() => {
      setRequest(false);
    }, 2000);
  };

  const handleDecline = (incomingId) => {
    declineRequest(incomingId, currentId, dispatch);
    getAllFriends(dispatch, currentId);
    getAllRequests(dispatch, currentId);
    setDecline(true);
    setTimeout(() => {
      setDecline(false);
    }, 2000);
  };

  const handleFriends = (friendId) => {
    getAllOthersFriends(dispatch, friendId);
    navigate("/friend");
  };

  useEffect(() => {
    getSuggestions(dispatch, currentId);
    var index = 0;
    let time = setInterval(function () {
      setOneSugg(suggestions[index++]?.name);
      setOneSuggId(suggestions[index++]?._id);
      setTwoSugg(suggestions[suggestions.length - index]?.name);
      setTwoSuggId(suggestions[suggestions.length - index]?._id);

      if (index === suggestions.length) {
        clearInterval(time);
      }
    }, 60000);
  }, []);

  return (
    <>
      <h1>Profile</h1>
      {request && <h1>Your request has been Sent</h1>}
      {accept && <h1>Request Accepted</h1>}
      {decline && <h1>Request Declined</h1>}

      <div className="profile">
        <div className="left">
          <h1>New Requests</h1>

          {requests.map((request) => (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p
                  style={{
                    margin: "10px",
                  }}
                >
                  {request.name}
                </p>
                <button
                  style={{
                    margin: "10px",
                  }}
                  onClick={() => handleAccept(request._id)}
                >
                  Accept
                </button>
                <button
                  style={{
                    margin: "10px",
                  }}
                  onClick={() => handleDecline(request._id)}
                >
                  Decline
                </button>
              </div>
            </>
          ))}
        </div>
        <div className="middle">
          <h1>New Suggestions</h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p>{oneSugg}</p>
            <button onClick={() => handleRequest(oneSuggId)}>
              Send Request
            </button>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p>{twoSugg}</p>
            <button onClick={() => handleRequest(twoSuggId)}>
              Send Request
            </button>
          </div>
        </div>
        <div className="right">
          <h1>Your Friends</h1>
          {friends.map((friend) => (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p
                  style={{
                    margin: "10px",
                  }}
                >
                  {friend.name}
                </p>
                <button
                  style={{
                    margin: "10px",
                  }}
                  onClick={() => handleFriends(friend._id)}
                >
                  See {friend.name}'s Friends
                </button>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
