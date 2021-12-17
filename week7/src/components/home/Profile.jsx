import React from "react";
import styled from "styled-components";
import profileImg from "../../assets/images/profile.png";
import { colors } from "../../libs/constants/colors";
import { ReactComponent as GithubIcon } from "../../assets/icons/github.svg";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as MailIcon } from "../../assets/icons/mail.svg";

const Profile = () => {
  return (
    <StyledRoot>
      <StyledProfile>
        <img src={profileImg} alt="profile" />
        <div>
          <h3>황주희</h3>
          <h4>아임줄리아</h4>
        </div>
      </StyledProfile>
      <StyledCenterLine></StyledCenterLine>
      <StyledContact>
        <a href="https://github.com/Juhee-Hwang" target="blank">
          <GithubIcon fill="lightGray" />
        </a>
        <a href="https://2runzzal.com/uploads/zpicture/org/d2cf5c4811c675ae485fe3e03aa2b6adbbd3740ffdd59bec0f7d26e7409c08a4.jpg" target="blank">
          <HomeIcon fill="lightGray" />
        </a>
        <a href="https://mblogthumb-phinf.pstatic.net/MjAyMDA3MTBfNCAg/MDAxNTk0Mzg5OTg3MDU4.H5oS7H39AZ29Z17P_ZUIKlEswGu3f95kFsBKfTe_Ei4g.MD8ucAVsBBG1q2XB7bNZB6NnKqKGIjHL0Sl_TxVDIkIg.JPEG.mahz3014/52.jpg?type=w800" target="blank">
          <MailIcon fill="lightGray" />
        </a>
      </StyledContact>
    </StyledRoot>
  );
};

export default Profile;

const StyledRoot = styled.section`
  margin: auto;
  margin-top: 90px;
  width: 100%;
`;

const StyledProfile = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 128px;
    height: 128px;
    border-radius: 50%;
    margin-right: 16px;
  }
  div {
    h3 {
      margin: 0;
      margin-bottom: 10px;
      font-size: 24px;
    }
    h4 {
      font-weight: normal;
      margin: 0;
      font-size: 18px;
      color: ${colors.lightGray};
    }
  }
`;

const StyledCenterLine = styled.div`
  background-color: rgb(233, 236, 239);
  width: 100%;
  height: 1px;
  margin-top: 32px;
  margin-bottom: 24px;
`;

const StyledContact = styled.div`
  & > a > svg {
    margin-right: 16px;
    &:hover {
      fill: ${colors.darkBlack};
    }
  }
`;
