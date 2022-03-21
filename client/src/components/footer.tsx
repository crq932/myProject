import React from "react";
import styled from "styled-components";
import logo from "../images/logo_letter.svg";
import github from "../images/githublogo.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: rgba(171, 134, 67, 0.2);
  width: 100%;
  height: 160px;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    background-size: cover;
  }
`;

const LeftContainer = styled.div`
  width: 30vw;
  height: 160px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Logo = styled.img`
  width: 80px;
  height: 160px;
  margin-left: 120px;
`;

const Content = styled.div`
  width: 20vw;
  height: 160px;
  color: #ab8643;
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-family: "Noto Sans KR";
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightContainer = styled.div`
  width: 70vw;
  height: 160px;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const ServiceContainer = styled.div`
  width: 20vw;
  height: 110px;
  color: #ab8643;
  font-weight: bold;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;
  font-family: "Noto Sans KR";
`;

const ServiceContent = styled.div`
  width: 60px;
  height: 2rem;
`;

const ServiceImage = styled.img`
  width: 30px;
  height: 2rem;
  cursor: pointer;
`;

const AboutContainer = styled.div`
  width: 20vw;
  height: 110px;
  color: #ab8643;
  display: flex;
  align-items: start;
  flex-direction: column;
`;

const AboutTitle = styled.div`
  width: 70px;
  height: 16px;
  font-weight: bold;
  font-family: "Noto Sans KR";
`;

const AboutContent = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
  font-size: 14px;
`;

const AboutContent_a = styled.div`
  width: 45px;
  height: 22px;
  cursor: pointer;
  font-family: "Noto Sans KR";
`;

const AboutContent_b = styled.div`
  width: 45px;
  height: 22px;
  cursor: pointer;
  font-family: "Noto Sans KR";
`;

const AboutContent_c = styled.div`
  width: 45px;
  height: 22px;
  cursor: pointer;
  font-family: "Noto Sans KR";
`;

const AboutContent_d = styled.div`
  width: 45px;
  height: 32px;
  cursor: pointer;
  font-family: "Noto Sans KR";
`;

const StyledLink = styled.a`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  color: #ab8643;
`;

function Footer() {
  const githubUri = `https://github.com/codestates/Letter`;
  const bongUri = `https://github.com/dbswnqhd12`;
  const minUri = `https://github.com/crq932`;
  const hwanUri = `https://github.com/dlawjdghks11`;
  const jooUri = `https://github.com/juyeong7`;

  return (
    <>
      <Container>
        <LeftContainer>
          <Logo src={logo} />
          <Content>© 2022 Copyright Letter Inc. All rights reserved.</Content>
        </LeftContainer>
        <RightContainer>
          <ServiceContainer>
            <ServiceContent>Service</ServiceContent>
            <a href={githubUri}>
              <ServiceImage src={github} />
            </a>
          </ServiceContainer>
          <AboutContainer>
            <AboutTitle>About us</AboutTitle>
            <AboutContent>
              <StyledLink href={bongUri}>
                <AboutContent_a>윤주봉</AboutContent_a>
              </StyledLink>
              <StyledLink href={minUri}>
                <AboutContent_b>심민재</AboutContent_b>
              </StyledLink>
              <StyledLink href={hwanUri}>
                <AboutContent_c>임정환</AboutContent_c>
              </StyledLink>
              <StyledLink href={jooUri}>
                <AboutContent_d>정주영</AboutContent_d>
              </StyledLink>
            </AboutContent>
          </AboutContainer>
        </RightContainer>
      </Container>
    </>
  );
}

export default Footer;
