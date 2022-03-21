import styled from "styled-components";
import image4 from "../images/Typewriter.svg";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
import React, { useCallback, useEffect, useState } from "react";

const BackgroundContainer1 = styled.div`
  width: 100vmax;
  height: 95vh;
  display: flex;
  align-items: end;
  justify-content: center;
  overflow-y: auto;
  background-color: #fffcfb;
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
  justify-content: start;
  flex-direction: column;
  width: 30vmax;
  height: 90vh;
  font-family: "Noto Sans KR";
  font-size: 2rem;
  color: #455a64;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vh;
    flex-direction: column;
  }
`;

const ContainerBlank = styled.div`
  width: 10vmax;
  height: 20vh;
`;

const ContainerText_a = styled.div`
  width: 29vmax;
  height: 5vh;
  @media (max-width: 1440px) {
    width: 100%;
    font-size: 1.5rem;
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
  width: 29vmax;
  height: 10vh;
  font-size: 3rem;
  font-weight: bold;
  @media (max-width: 1440px) {
    width: 100%;
    font-size: 2rem;
    margin-left: 90px;
    height: 7vh;
  }
  @media (max-width: 768px) {
    width: 80%;
    font-size: 2rem;
    margin-left: 0px;
    height: 8.5vh;
    margin-top: 25px;
  }
`;

const ContainerText_c = styled.div`
  width: 29vmax;
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
    height: 20vh;
  }
`;

const ContainerText_d = styled.div`
  width: 29vmax;
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
  height: 50vh;
  display: flex;
  justify-content: end;
  flex-direction: column;
`;

const ContentImage = styled.img`
  width: 35vmax;
  height: 50vh;
`;

const ContainerBlank2 = styled.div`
  width: 10vmax;
  height: 20vh;
`;

function LandingTheme_d() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const animationItem = {
    image: useScrollFadeIn({ direction: "up", duration: 0.5, delay: 0 }),
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
      <Container_1
        style={{
          opacity: `${scrollPosition > 4400 ? `0` : `1`}`,
          transition: `${scrollPosition > 4400 ? `1s` : `0`}`,
        }}
      >
        <ContainerBlank />
        <ContainerText_a
          style={{
            opacity: `${(scrollPosition - 2900) / 50}`,
            transition: "1s",
          }}
        >
          #2.
        </ContainerText_a>
        <ContainerText_b
          style={{
            opacity: `${(scrollPosition - 3000) / 50}`,
            transition: "1.5s",
          }}
        >
          편지지와 글꼴을 선택 후
        </ContainerText_b>
        <ContainerText_c
          style={{
            opacity: `${(scrollPosition - 3100) / 50}`,
            transition: "1.5s",
          }}
        >
          편지를 작성하세요.
        </ContainerText_c>
        <ContainerText_d
          style={{
            opacity: `${(scrollPosition - 3196) / 50}`,
            transition: "1.5s",
          }}
        >
          5가지 편지지 이미지와 109가지의 손글씨 글꼴이 제공됩니다.
        </ContainerText_d>
      </Container_1>
      <ContainerImage {...animationItem.image}>
        <ContainerBlank2 />
        <ContentImage src={image4} />
      </ContainerImage>
    </BackgroundContainer1>
  );
}

export default LandingTheme_d;
