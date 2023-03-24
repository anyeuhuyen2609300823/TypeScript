import React from "react";

const Avatar = ({ user, showInfo, age }) => {
  age = 20;
  return (
    <>
      <div>Tên: {user.name}</div>
      <div>Tuổi: {age}</div>
      <div>
        Ảnh: <img src={user.image} alt="" />
      </div>
    </>
  );
};

export default Avatar;
