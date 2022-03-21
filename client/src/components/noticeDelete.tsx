import styled from "styled-components";
import bang from "../images/bang.svg";

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

const Bang = styled.img`
  width: 220px;
  height: 220px;
`;

const Content_b = styled.div`
  width: 160px;
  height: 50px;
  color: #ab8643;
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-weight: 400;
`;

// const Content_c = styled.div`
//   width: 268px;
//   height: 50px;
// `;

const DeleteBtn = styled.button`
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

function NoticeDelete() {
  return (
    <div>
      <BackgroundContainer>
        <Container>
          <Content_a>
            <Bang src={bang} />
          </Content_a>
          <Content_b>정말 삭제하시겠습니까?</Content_b>
          <DeleteBtn>삭제</DeleteBtn>
        </Container>
      </BackgroundContainer>
    </div>
  );
}

export default NoticeDelete;
