import styled from "styled-components";
import logo from "../images/logo_letter.svg";

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 329px;
  height: 445px;
  background-color: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

const Container_a = styled.div`
  width: 329px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoContainer = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 65px;
  height: 30px;
  padding-left: 30px;
`;

const Xbox = styled.div`
  width: 30px;
  height: 30px;
  color: #c4c4c4;
  cursor: pointer;
  padding-top: 10px;
`;

const Container_b = styled.div`
  width: 329px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 30px;
`;

const Content_a = styled.div`
  width: 190px;
  heigth: 60px;
  color: #ab8643;
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-weight: 100;
`;

const Content_b = styled.div`
  width: 165px;
  height: 40px;
  color: #ab8643;
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-weight: 100;
  padding-top: 5px;
`;

const Container_c = styled.div`
  width: 329px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DoLoginBtn = styled.button`
  width: 150px;
  height: 40px;
  font-size: 15px;
  font-family: "Noto Sans KR";
  cursor: pointer;
  background-color: rgba(171, 134, 67, 1);
  color: rgba(255, 255, 255, 1);
  border-radius: 5px;
  border-style: none;
  &:hover {
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(171, 134, 67, 1);
    color: rgba(171, 134, 67, 1);
  }
`;

function NoticeLogin() {
  return (
    <div>
      <BackgroundContainer>
        <Container>
          <Container_a>
            <LogoContainer>
              <Logo src={logo} />
            </LogoContainer>
            <Xbox>x</Xbox>
          </Container_a>
          <Container_b>
            <Content_a>로그인이 필요한 기능입니다.</Content_a>
            <Content_b>로그인 창으로 가볼까요?</Content_b>
          </Container_b>
          <Container_c>
            <DoLoginBtn>로그인 하러 가기</DoLoginBtn>
          </Container_c>
        </Container>
      </BackgroundContainer>
    </div>
  );
}

export default NoticeLogin;
