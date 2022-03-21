import styled from "styled-components";
import check from "../images/check.svg";

const BackgroundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const Container = styled.div`
  width: 268px;
  height: 317px;
  background-color: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
`;

const Content_a = styled.div`
  width: 268px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Check = styled.img`
  width: 180px;
  height: 220px;
  padding-top: 25px;
`;

const Content_b = styled.div`
  width: 110px;
  height: 50px;
  color: #ab8643;
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-weight: 400;
  padding-left: 5px;
`;

const ConfirmBtn = styled.button`
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

interface props {
  open: boolean;
  close: () => void;
}

function NoticeSave(props: props) {
  const { open, close } = props;
  return (
    <div>
      {open ? (
        <BackgroundContainer>
          <Container>
            <Content_a>
              <Check src={check} />
            </Content_a>
            <Content_b>저장되었습니다.</Content_b>
            <ConfirmBtn onClick={close}>확인</ConfirmBtn>
          </Container>
        </BackgroundContainer>
      ) : null}
    </div>
  );
}

export default NoticeSave;
