import styled from "styled-components";
import FemaleLogo from "../images/defaultImage-f.png";
import NoticeResign from "./noticeResign";
import { useState } from "react";

const ModalContainer = styled.div`
  height: 15rem;
  text-align: center;
  margin: 120px auto;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
`;

const ModalView = styled.div.attrs(() => {
  "dialog";
})`
  border: 2px solid #ab8643;
  border-radius: 10px;
  background-color: #ffffff;
  width: 497px;
  height: 488px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseBtn = styled.span`
  width: 40px;
  height: 40px;
  font-size: 40px;
  font-weight: lighter;
  color: #9b9b9b;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 432px;
  margin-top: 2%;
  vertical-align: center;
  outline: 0;
`;

const ProfileImgContainer = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 40px;
`;

const Password = styled.input.attrs({
  placeholder: "비밀번호",
  type: "password",
})`
  margin-top: 30px;
  border-radius: 2px;
  width: 200px;
  height: 40px;
  border: 1px solid #e5e5e5;
  padding: 9px 12px;
  outline: none;
  box-sizing: border-box;
`;

const PasswordCheck = styled.input.attrs({
  placeholder: "비밀번호확인",
  type: "password",
})`
  margin-top: 7px;
  border-radius: 2px;
  width: 200px;
  height: 40px;
  border: 1px solid #e5e5e5;
  padding: 9px 12px;
  outline: none;
  box-sizing: border-box;
`;

const QuitBtn = styled.button`
  width: 150px;
  height: 40px;
  font-size: 15px;
  font-family: "Noto Sans KR";
  cursor: pointer;
  background-color: rgba(171, 134, 67, 1);
  color: rgba(255, 255, 255, 1);
  border-radius: 5px;
  margin-top: 20px;
  border-style: none;
  &:hover {
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(171, 134, 67, 1);
    color: rgba(171, 134, 67, 1);
  }
`;

type GreetFunction = (isModal: boolean) => void;
type UserProps = {
  ModalHandler: GreetFunction;
};
function QuitModal({ ModalHandler }: UserProps): JSX.Element {
  const [openModal, setOpenModal] = useState(false);
  const modalHandler = () => {
    setOpenModal(!openModal);
    ModalHandler(false);
  };
  return openModal ? (
    <div></div>
  ) : (
    <ModalContainer>
      <ModalBackdrop>
        <ModalView onClick={(e: any) => e.stopPropagation()}>
          <CloseBtn onClick={modalHandler}>×</CloseBtn>
          <ProfileImgContainer src={FemaleLogo} />
          <Password />
          <PasswordCheck />
          <QuitBtn>회원 탈퇴</QuitBtn>
        </ModalView>
      </ModalBackdrop>
    </ModalContainer>
  );
}

export default QuitModal;
