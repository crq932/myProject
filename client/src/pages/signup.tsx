import styled from "styled-components";
import mainImage from "../images/basic.jpg";
import Letterlogo from "../images/logo_letter.svg";
import FemaleLogo from "../images/defaultImage-f.png";
import MaleLogo from "../images/defaultImage-m.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

const SignupContainer = styled.div`
  width: 450px;
  height: 760px;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  display: flex column;
  align-items: center;
  width: 380px;
  height: 550px;
  background-color: rgb(252, 251, 251);
  box-shadow: 0 0 5px rgb(212, 212, 212);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  border-radius: 15px;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const LoginLogo = styled.img`
  width: 40%;
  margin: 7%;
`;

const EmailContainer = styled.div`
  display: flex;
  margin-top: -20px;
  align-items: center;
  width: 60%;
  height: 10%;
`;

const EmailInput = styled.input.attrs({
  placeholder: "이메일을 입력해 주세요",
  type: "email",
})`
  margin-top: 10px;
  border-radius: 2px;
  width: 70%;
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
  margin-top: 20px;
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

const Password = styled.input.attrs({
  placeholder: "비밀번호",
  type: "password",
})`
  margin-top: 5px;
  border-radius: 2px;
  width: 60%;
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
  margin-top: 5px;
  border-radius: 2px;
  width: 60%;
  height: 40px;
  border: 1px solid #e5e5e5;
  padding: 9px 12px;
  outline: none;
  box-sizing: border-box;
`;

const NameInput = styled.input.attrs({
  placeholder: "이름",
  type: "name",
})`
  margin-top: 5px;
  border-radius: 2px;
  width: 60%;
  height: 40px;
  border: 1px solid #e5e5e5;
  padding: 9px 12px;
  outline: none;
  box-sizing: border-box;
`;

const NicknameContainer = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  height: 10%;
`;

const NicknameInput = styled.input.attrs({
  placeholder: "닉네임을 입력해 주세요",
  type: "nickname",
})`
  margin-top: 10px;
  border-radius: 2px;
  width: 70%;
  height: 40px;
  border: 1px solid #e5e5e5;
  padding: 9px 12px;
  outline: none;
  box-sizing: border-box;
`;

const SelectContainer = styled.div`
  height: 16%;
  width: 50%;
  display: flex;
`;

const SelectContainer2 = styled.div`
  height: 100%;
  width: 50%;
`;
const GenderRadioSelector = styled.input`
  display: flex;
  margin-left: 45%;
`;

const FemaleImg = styled.img`
  width: 80%;
  height: 80%;
  margin-left: 10%;
`;

const MaleImg = styled.img`
  width: 80%;
  height: 80%;
  margin-left: 10%;
`;

const SignupBtn = styled.button`
  height: 40px;
  width: 200px;
  font-size: 14px;
  padding: 13px 30px;
  cursor: pointer;
  background-color: rgb(252, 251, 251);
  color: #ab8643;
  line-height: 1px;
  margin-top: 20px;
  margin-bottom: 12px;
  border-radius: 3px;
  border-style: none;
  border: 1px solid #ab8643;
  &:hover {
    background-color: #ab8643;
    color: #fffcfb;
  }
`;
//
function Signup() {
  const navigate = useNavigate();
  const [userinfo, setUserinfo] = useState({
    email: "",
    password: "",
    name: "",
    nickname: "",
    gender: "",
  });

  const handleInputValue = (key: string) => (e: any) => {
    setUserinfo({ ...userinfo, [key]: e.target.value });
  };

  const handleValidationCheck = (key: string, value: string | number) => () => {
    axios
      .post(
        `${process.env.REACT_APP_SERVER_URI}/${key}check`,
        { value },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((result) => {
        result;
        console.log(result);
      });
  };

  const handleSignup = () => {
    const { email, password, name, nickname, gender } = userinfo;
    axios
      .post(
        `${process.env.REACT_APP_SERVER_URI}/signup`,
        { email, password, name, nickname, gender },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((result) => {
        result;
        navigate("/login");
      });
  };

  return (
    <div>
      <BackgroundContainer>
        <SignupContainer>
          <Container>
            <TextContainer>
              <LoginLogo src={Letterlogo} />
              <EmailContainer>
                <EmailInput onChange={handleInputValue("email")} />
                <ValidationBtn
                  onClick={handleValidationCheck("email", userinfo.email)}
                >
                  중복확인
                </ValidationBtn>
              </EmailContainer>
              <Password onChange={handleInputValue("password")} />
              <PasswordCheck onChange={handleInputValue("password")} />
              <NameInput onChange={handleInputValue("name")} />
              <NicknameContainer>
                <NicknameInput onChange={handleInputValue("nickname")} />
                <ValidationBtn
                  onClick={handleValidationCheck("nick", userinfo.nickname)}
                >
                  중복확인
                </ValidationBtn>
              </NicknameContainer>
              <SelectContainer>
                <SelectContainer2>
                  <GenderRadioSelector
                    type={"radio"}
                    name="gender"
                    value="female"
                    onClick={handleInputValue("gender")}
                  />
                  <FemaleImg src={FemaleLogo} />
                </SelectContainer2>
                <SelectContainer2>
                  <GenderRadioSelector
                    type={"radio"}
                    name="gender"
                    value="male"
                    onClick={handleInputValue("gender")}
                  />
                  <MaleImg src={MaleLogo} />
                </SelectContainer2>
              </SelectContainer>
              <SignupBtn onClick={handleSignup}>회원가입 완료</SignupBtn>
            </TextContainer>
          </Container>
        </SignupContainer>
      </BackgroundContainer>
    </div>
  );
}

export default Signup;
