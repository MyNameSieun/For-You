import React from "react";
import styled from "styled-components";
import UserImageSrc from "../../assets/images/userImageSrc.png";

const UserImages = styled.figure`
  font-size: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;
function userImage({ src }) {
  return (
    <UserImages>
      <img src={src ?? UserImageSrc} alt="user image" />
    </UserImages>
  );
}

export default userImage;
