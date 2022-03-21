import styled from "styled-components";
import image1 from "../images/Texting.svg";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
import React, { useCallback, useEffect, useState } from "react";

const BackgroundContainer1 = styled.div`
  width: 100vw;
  height: 95vh;
  display: flex;
  align-items: center;
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
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 50vmax;
  height: 45vh;
  font-family: "Noto Sans KR";
  font-size: 4rem;
  font-weight: bold;
  color: #455a64;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
    height: 20vh;
    flex-direction: column;
  }
`;

const ContainerText_a = styled.div`
  width: 700px;
  height: 9vh;
  @media (max-width: 1440px) {
    width: 100%;
    font-size: 2rem;
    margin-left: 90px;
    height: 5vh;
  }
  @media (max-width: 768px) {
    width: 80%;
    font-size: 2rem;
    height: 4vh;
    margin-left: 0px;
  }
`;

const ContainerText_b = styled.div`
  width: 700px;
  height: 9vh;
  @media (max-width: 1440px) {
    width: 100%;
    font-size: 2rem;
    margin-left: 90px;
    height: 5vh;
  }
  @media (max-width: 768px) {
    width: 80%;
    font-size: 2rem;
    height: 4vh;
    margin-left: 0px;
  }
`;

const ContainerText_c = styled.div`
  width: 800px;
  height: 9vh;
  margin-left: 95px;
  @media (max-width: 1440px) {
    width: 100%;
    font-size: 2rem;
    height: 7vh;
  }
  @media (max-width: 768px) {
    width: 80%;
    font-size: 2rem;
    height: 5vh;
    margin-left: 0px;
  }
`;

const Container_2 = styled.div`
  width: 50vmax;
  height: 65vh;
`;

const ContainerImage = styled.img`
  width: 50vmax;
  height: 65vh;
  @media (max-width: 768px) {
    width: 100%;
    height: 40vh;
    margin-left: 0px;
  }
`;

function LandingTheme_a() {
  console.log(window.scrollY);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const animationItem = {
    image: useScrollFadeIn({ direction: "right", duration: 2, delay: 0.5 }),
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
          opacity: `${scrollPosition > 1650 ? `0` : `1`}`,
          transition: `${scrollPosition > 1650 ? `1s` : `0`}`,
        }}
      >
        <ContainerText_a
          style={{
            opacity: `${(scrollPosition - 400) / 50}`,
            transition: "0.5s",
          }}
        >
          디지털 시대에 지친
        </ContainerText_a>
        <ContainerText_b
          style={{
            opacity: `${(scrollPosition - 600) / 50}`,
            transition: "1s",
          }}
        >
          여러분의
        </ContainerText_b>
        <ContainerText_c
          style={{
            opacity: `${(scrollPosition - 800) / 50}`,
            transition: "1.5s",
          }}
        >
          아날로그 감성을 찾아드려요.
        </ContainerText_c>
      </Container_1>
      <Container_2 {...animationItem.image}>
        <ContainerImage src={image1} />
      </Container_2>
    </BackgroundContainer1>
  );
}

export default LandingTheme_a;
