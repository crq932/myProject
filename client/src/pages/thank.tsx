import React, { useState } from "react";
import styled from "styled-components";
import Headerimg from "../images/header.png";
import Letterverse from "../components/letterverse";
import Thx1 from "../components/lettercomponents/thx1";
import Thx2 from "../components/lettercomponents/thx2";
import Thx3 from "../components/lettercomponents/thx3";
import Thx4 from "../components/lettercomponents/thx4";
import Thx5 from "../components/lettercomponents/thx5";
import Thx6 from "../components/lettercomponents/thx6";
import Thx7 from "../components/lettercomponents/thx7";
import BigScreen from "../pages/bigScreen";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
  width: 100vw;
  height: 70vh;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  position: relative;
  background-image: url(${Headerimg});
  background-size: cover;
  color: white;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const TpTitle = styled.div`
  width: 100%;
  height: 70px;
  align-items: center;
  display: flex;
  color: #090909;
  background-color: #f0e0c1;
`;
const Templatebox = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 80px;
  justify-content: space-around;
`;
const Template = styled.img`
  width: 200px;
  height: 300px;
  line-height: 20px;
  align-items: center;
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
`;
const LandingContainer = styled.div`
  overflow-x: hidden;
`;

function Thank() {
  return (
    <LandingContainer>
      <HeaderContainer />
      <TpTitle>기념일</TpTitle>
      <br />
      <Templatebox>
        <Thx1 />
        <Thx2 />
        <Thx3 />
        <Thx4 />
      </Templatebox>
      <Templatebox>
        <Thx5 />
        <Thx6 />
        <Thx7 />
        <Thx1 />
      </Templatebox>
    </LandingContainer>
  );
}

export default Thank;
