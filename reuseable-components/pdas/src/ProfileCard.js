import React from "react";

const ProfileCard = ({ title, handle }) => {
  return (
    <div>
      <h3>
        My name is {title} and my twitter name: <strong>{handle}</strong>
      </h3>
    </div>
  );
};

export default ProfileCard;
