import React, { useState } from "react";
import styled from "styled-components";
import Headerimg from "../images/header.png";
import Letterverse from "../components/letterverse";
import Cong1 from "../components/lettercomponents/cong1";
import Cong2 from "../components/lettercomponents/cong2";
import Cong3 from "../components/lettercomponents/cong3";
import Cong4 from "../components/lettercomponents/cong4";
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
  display: flex;
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

function Cong() {
  return (
    <LandingContainer>
      <HeaderContainer />
      <TpTitle>축하</TpTitle>
      <br />
      <Templatebox>
        <Cong1 />
        <Cong2 />
        <Cong3 />
        <Cong4 />
      </Templatebox>
    </LandingContainer>
  );
}

export default Cong;
