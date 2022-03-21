import React from "react";
import styled from "styled-components";
import mainImage from "../images/basic.jpg";

const BackgroundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  position: relative;
  background-image: url(${mainImage});
  background-size: cover;
  color: white;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Content_a = styled.div`
  font-size: 7.5rem;
  font-family: "KCC-eunyoung";
  width: 1170px;
  height: 150px;
  @media (max-width: 1400px) {
    width: 780px;
    height: 100px;
    font-size: 5rem;
    margin-top: 130px;
  }
  @media (max-width: 768px) {
    width: 466px;
    height: 60px;
    font-size: 3rem;
    margin-top: 130px;
  }
`;

const Content_b = styled.div`
  font-size: 2.5rem;
  font-family: "SUIT-Thin";
  @media (max-width: 1400px) {
    width: 500px;
    font-size: 1.8rem;
  }
  @media (max-width: 768px) {
    width: 312px;
    font-size: 1.2rem;
  }
`;

function Theme() {
  return (
    <BackgroundContainer>
      <Content_a> &quot;당신의 아날로그 감성을 깨우세요.&quot;</Content_a>
      <Content_b>손편지의 감동을 그대로 느낄 수 있습니다.</Content_b>
    </BackgroundContainer>
  );
}

export default Theme;
