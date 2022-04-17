import React from "react";
import { useSelector } from "react-redux";

const Friends = () => {
  const othersFriends = useSelector((state) => state.user.othersFriends);

  return (
    <div>
      <h1>Friends</h1>
      {othersFriends.map((friend) => (
        <p>{friend.name}</p>
      ))}
    </div>
  );
};

export default Friends;
