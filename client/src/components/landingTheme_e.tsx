import styled from "styled-components";
import image5 from "../images/Printer.svg";
import image6 from "../images/Emails.svg";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
import React, { useCallback, useEffect, useState } from "react";

const BackgroundContainer1 = styled.div`
  width: 100vmax;
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  background-color: rgba(171, 134, 67, 0.7);
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 95vh;
    margin-left: 0px;
    flex-direction: column;
  }
`;

const Container_1 = styled.div`
  display: flex;
  align-items: end;
  justify-content: end;
  flex-direction: column;
  width: 40vmax;
  height: 45vh;
  font-family: "Noto Sans KR";
  color: #455a64;
  @media (max-width: 768px) {
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40vh;
    flex-direction: column;
  }
`;

const ContainerImage_1 = styled.div`
  width: 350px;
  height: 250px;
`;

const ContainerEmailImage = styled.img`
  width: 350px;
  height: 250px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ContainerText = styled.div`
  width: 650px;
  height: 100px;
  @media (max-width: 1440px) {
    width: 100%;
    font-size: 2rem;
    margin-left: 90px;
  }
  @media (max-width: 768px) {
    width: 400px;
    height: 250px;
    font-size: 1.5rem;
    margin-left: 0px;
  }
`;

const ContainerText_a = styled.div`
  width: 650px;
  height: 5vh;
  font-size: 1.5rem;
  @media (max-width: 1440px) {
    width: 100%;
    font-size: 2rem;
    margin-left: 90px;
    height: 5vh;
  }
  @media (max-width: 768px) {
    width: 80%;
    font-size: 1.5rem;
    margin-left: 0px;
  }
`;

const ContainerText_b = styled.div`
  width: 650px;
  height: 8vh;
  font-size: 3rem;
  font-weight: bold;
  @media (max-width: 1440px) {
    width: 100%;
    font-size: 2rem;
    margin-left: 90px;
    height: 7vh;
  }
  @media (max-width: 768px) {
    width: 400px;
    font-size: 2rem;
    margin-left: 0px;
    height: 40px;
  }
`;

const ContainerText_c = styled.div`
  width: 650px;
  height: 14vh;
  font-size: 3rem;
  font-weight: bold;
  @media (max-width: 1440px) {
    width: 100%;
    font-size: 2rem;
    margin-left: 90px;
    height: 5vh;
  }
  @media (max-width: 768px) {
    width: 80%;
    font-size: 2rem;
    margin-left: 0px;
    height: 90px;
  }
`;

const ContainerText_d = styled.div`
  width: 650px;
  height: 10vh;
  font-size: 1rem;
  color: #747171;
  @media (max-width: 1440px) {
    width: 100%;
    font-size: 0.9rem;
    margin-left: 90px;
    height: 5vh;
  }
  @media (max-width: 768px) {
    width: 80%;
    font-size: 0.9rem;
    margin-left: 0px;
  }
`;

const ContainerImage = styled.div`
  width: 35vmax;
  height: 95vh;
  display: flex;
  align-items: start;
  @media (max-width: 768px) {
    height: 50%;
  }
`;

const ContentImage = styled.img`
  width: 35vmax;
  height: 75vh;
`;

function LandingTheme_e() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const animationItem = {
    image: useScrollFadeIn({ direction: "down", duration: 1.5, delay: 0.5 }),
    image2: useScrollFadeIn({ direction: "left", duration: 1.5, delay: 0.5 }),
  };

  const onScroll = useCallback(() => {
    setScrollPosition(window.pageYOffset);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <BackgroundContainer1>
      <ContainerImage {...animationItem.image}>
        <ContentImage src={image5} />
      </ContainerImage>
      <Container_1>
        <ContainerImage_1 {...animationItem.image2}>
          <ContainerEmailImage src={image6} />
        </ContainerImage_1>
        <ContainerText
          style={{
            opacity: `${scrollPosition > 5500 ? `0` : `1`}`,
            transition: `${scrollPosition > 5500 ? `1s` : `0`}`,
          }}
        >
          <ContainerText_a
            style={{
              opacity: `${(scrollPosition - 4135) / 50}`,
              transition: "1s",
            }}
          >
            #3.
          </ContainerText_a>
          <ContainerText_b
            style={{
              opacity: `${(scrollPosition - 4200) / 50}`,
              transition: "1.5s",
            }}
          >
            작성하신 편지는 인쇄를 통해
          </ContainerText_b>
          <ContainerText_c
            style={{
              opacity: `${(scrollPosition - 4420) / 50}`,
              transition: "1.5s",
            }}
          >
            만나보실 수 있습니다.
          </ContainerText_c>
          <ContainerText_d
            style={{
              opacity: `${(scrollPosition - 4515) / 50}`,
              transition: "1.5s",
            }}
          >
            내 이메일로 받아보기 또는 인쇄하실 수 있습니다.
          </ContainerText_d>
        </ContainerText>
      </Container_1>
    </BackgroundContainer1>
  );
}

export default LandingTheme_e;
