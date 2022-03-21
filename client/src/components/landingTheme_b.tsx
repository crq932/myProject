import styled from "styled-components";
import image2 from "../images/Envelope.svg";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
import { useCallback, useEffect, useState } from "react";

const BackgroundContainer1 = styled.div`
  width: 100vw;
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: start;
  overflow-y: auto;
  background-color: rgba(171, 134, 67, 0.7);
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 95vh;
    margin-left: 0px;
  }
`;

const Container_1 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 700px;
  height: 80vh;
  font-family: "Noto Sans KR";
  font-size: 1.5rem;
  color: #455a64;
  text-align: center;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    flex-direction: column;
  }
`;

// const ContainerText = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   width: 700px;
//   height: 95vh;
//   font-family: "Noto Sans KR";
//   font-size: 1.5rem;
//   color: #455a64;
//   @media (max-width: 768px) {
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 20vh;
//     flex-direction: column;
//   }
// `;

const ContainerText_a = styled.div`
  width: 600px;
  height: 3.5vh;
  margin-top: 30px;
  @media (max-width: 768px) {
    width: 70%;
    font-size: 0.9rem;
    height: 2.3vh;
  }
`;

const ContainerText_b = styled.div`
  width: 680px;
  height: 3.5vh;
  @media (max-width: 768px) {
    width: 80%;
    font-size: 0.9rem;
  }
`;

const Container_2 = styled.div`
  width: 35vmax;
  height: 70vh;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    height: 50vh;
  }
`;

const ContainerImage = styled.img`
  width: 35vmax;
  height: 65vh;
  @media (max-width: 768px) {
    width: 110%;
    height: 50vh;
  }
`;

function LandingTheme_b() {
  console.log(window.scrollY);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const animationItem = {
    image: useScrollFadeIn({ direction: "down", duration: 1, delay: 0.5 }),
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
      <Container_2 {...animationItem.image}>
        <ContainerImage src={image2} />
      </Container_2>
      {/* <ContainerText> */}
      <Container_1
        style={{
          opacity: `${scrollPosition > 2500 ? `0` : `1`}`,
          transition: `${scrollPosition > 2500 ? `3s` : `0`}`,
        }}
      >
        <ContainerText_a
          style={{
            opacity: `${(scrollPosition - 1700) / 50}`,
            transition: "1s",
          }}
        >
          진심이 담긴 한 장의 손편지를 받아보신 적 있으신가요?
        </ContainerText_a>
        <ContainerText_b
          style={{
            opacity: `${(scrollPosition - 1850) / 50}`,
            transition: "2s",
          }}
        >
          디지털이지만 마치 아날로그적인 방식으로 마음을 표현해보세요.
        </ContainerText_b>
        {/* </ContainerText> */}
      </Container_1>
    </BackgroundContainer1>
  );
}

export default LandingTheme_b;
