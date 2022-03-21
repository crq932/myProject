import styled from "styled-components";
import FemaleLogo from "../images/defaultImage-f.png";
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

const Container = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
`;

const ProfileImgContainer = styled.div`
  width: 230px;
  height: 300px;
  margin-left: 10px;
  margin-top: 40px;
`;

const ProfileImg = styled.img`
  width: 175px;
  height: 175px;
  margin-top: 40px;
  cursor: pointer;
`;

const EditProfileBtn = styled.button`
  height: 32px;
  width: 122px;
  font-size: 14px;
  cursor: pointer;
  background-color: #ab8643;
  color: rgb(252, 251, 251);
  line-height: 1px;
  border: 1px solid #ab8643;
  border-radius: 5px;
  border-style: none;
  margin-top: 20px;
  &:hover {
    background-color: #fffcfb;
    color: #ab8643;
    border: 1px solid #ab8643;
  }
`;

const ProfileContentContainer = styled.div`
  width: 250px;
  height: 300px;
  margin-top: 10px;
`;

const CloseBtn = styled.span`
  width: 40px;
  height: 40px;
  font-size: 40px;
  font-weight: lighter;
  color: #9b9b9b;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 200px;
  vertical-align: center;
  outline: 0;
`;

const NicknameContainer = styled.div`
  width: 240px;
  height: 50px;
  margin-top: 30px;
`;

const TextContainer = styled.div`
  width: 80px;
  height: 20px;
  color: #ab8643;
  text-decoration: underline;
  text-underline-position: under;
  text-decoration-color: #d3b47b;
  margin-left: 7px;
`;

const NicknameInput = styled.input.attrs({
  placeholder: "닉네임을 입력해 주세요",
})`
  border-radius: 2px;
  width: 150px;
  height: 40px;
  border: 1px solid #e5e5e5;
  padding: 9px 12px;
  outline: none;
  box-sizing: border-box;
`;

const ValidationBtn = styled.button`
  height: 35px;
  width: 60px;
  font-size: 12px;
  cursor: pointer;
  background-color: #ab8643;
  color: rgb(252, 251, 251);
  line-height: 1px;
  margin-top: 10px;
  margin-bottom: 12px;
  margin-left: 10px;
  border-radius: 3px;
  border-style: none;
  &:hover {
    background-color: #fffcfb;
    color: #ab8643;
    border: 1px solid #ab8643;
  }
`;

const TextContainer2 = styled.div`
  width: 100px;
  height: 20px;
  color: #ab8643;
  text-decoration: underline;
  text-underline-position: under;
  text-decoration-color: #d3b47b;
  margin-left: 5px;
  margin-top: 35px;
`;

const Password = styled.input.attrs({
  placeholder: "비밀번호를 입력해 주세요",
  type: "password",
})`
  margin-top: 5px;
  border-radius: 2px;
  width: 228px;
  height: 40px;
  border: 1px solid #e5e5e5;
  padding: 9px 12px;
  outline: none;
  box-sizing: border-box;
`;

const PasswordCheck = styled.input.attrs({
  placeholder: "비밀번호를 한 번 더 입력해 주세요",
  type: "password",
})`
  margin-top: 5px;
  border-radius: 2px;
  width: 228px;
  height: 40px;
  border: 1px solid #e5e5e5;
  padding: 9px 12px;
  outline: none;
  box-sizing: border-box;
`;

const EditBtn = styled.button`
  width: 150px;
  height: 40px;
  font-size: 15px;
  font-family: "Noto Sans KR";
  cursor: pointer;
  background-color: rgba(171, 134, 67, 1);
  color: rgba(255, 255, 255, 1);
  border-radius: 5px;
  border-style: none;
  margin-top: 20px;
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

function EditProfileModal({ ModalHandler }: UserProps): JSX.Element {
  const [openModal, setOpenModal] = useState(false);
  const modalHandler = () => {
    setOpenModal(!openModal);
    ModalHandler(false);
  };
  return (
    <ModalContainer>
      <ModalBackdrop>
        <ModalView onClick={(e: any) => e.stopPropagation()}>
          <Container>
            <ProfileImgContainer>
              <ProfileImg src={FemaleLogo} />
              <EditProfileBtn>사진 편집</EditProfileBtn>
            </ProfileImgContainer>
            <ProfileContentContainer>
              <CloseBtn onClick={modalHandler}>×</CloseBtn>
              <NicknameContainer>
                <TextContainer>닉네임 변경</TextContainer>
                <NicknameInput />
                <ValidationBtn>중복 확인</ValidationBtn>
              </NicknameContainer>
              <TextContainer2>비밀번호 변경</TextContainer2>
              <Password />
              <PasswordCheck />
            </ProfileContentContainer>
          </Container>
          <EditBtn>편집 완료</EditBtn>
        </ModalView>
      </ModalBackdrop>
    </ModalContainer>
  );
}

export default EditProfileModal;
