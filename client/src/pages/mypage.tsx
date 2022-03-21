import styled from "styled-components";
import mainImage from "../images/basic.jpg";
import FemaleLogo from "../images/defaultImage-f.png";
import MaleLogo from "../images/defaultImage-m.png";
import TypewriterImg from "../images/Typewriter.svg";
import Mypost from "../components/mypost";
import { useState, useEffect } from "react";
import QuitModal from "../components/quitModal";
import EditProfileModal from "../components/editProfileModal";
import { IMypageProps } from "../types/propsInterface";
import { Link } from "react-router-dom";
import axios from "axios";
import MyTemplate from "../pages/myTemplate";

const BackgroundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow-y: auto;
  position: relative;
  background-size: cover;
  color: white;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BackgroundImg = styled.div`
  width: 40%;
  height: 103vh;
  display: flex;
  justify-content: center;
  overflow-y: auto;
  position: relative;
  background-image: url(${mainImage});
  background-size: cover;
  background-position: center;
  color: white;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MypageText = styled.div`
  color: white;
  position: absolute;
  bottom: 40px;
  width: 45%;
  height: 7%;
  font-size: 5vw;
  font-weight: bold;
  font-family: "Noto Sans KR";
`;

const Container = styled.div`
  width: 60%;
  height: 100%;
`;

const ProfileContainer = styled.div`
  width: 100%;
  height: 45vh;
  display: flex;
`;

const ProfileImgContainer = styled.img`
  width: 150px;
  height: 150px;
  margin-left: 120px;
  margin-top: 140px;
  flex-direction: column-reverse;
`;

const ProfileContentContainer = styled.div`
  width: 60%;
  height: 30%;
  padding: 135px 20px;
`;

const LogoutBtn = styled.button`
  width: 52px;
  height: 20px;
  border-radius: 100px;
  font-size: 10px;
  margin-left: 80%;
  border: 0;
  outline: 0;
  cursor: pointer;
  background-color: #ab8643;
  color: rgb(252, 251, 251);
  &:hover {
    background-color: #fffcfb;
    color: #ab8643;
    border: 1px solid #ab8643;
  }
`;

const NicknameContainer = styled.div`
  height: 20px;
  padding: 0px 35px;
  margin-top: 30px;
  font-size: 15px;
  color: #ab8643;
`;

const EmailContainer = styled.div`
  height: 20px;
  padding: 0px 35px;
  margin-top: 3px;
  font-size: 15px;
  color: #ab8643;
`;

const PasswordContainer = styled.div`
  height: 20px;
  padding: 0px 35px;
  margin-top: 3px;
  font-size: 15px;
  color: #ab8643;
`;

const ButtonContainer = styled.div`
  height: 30px;
  margin-top: 40px;
  margin-left: -20px;
  display: flex;
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
  &:hover {
    background-color: #fffcfb;
    color: #ab8643;
    border: 1px solid #ab8643;
  }
`;

const QuitBtn = styled.button`
  height: 32px;
  width: 122px;
  font-size: 14px;
  cursor: pointer;
  background-color: rgb(252, 251, 251);
  color: #ab8643;
  line-height: 1px;
  margin-left: 20px;
  border-radius: 5px;
  border: 1px solid #ab8643;
  outline: 0;
  &:hover {
    background-color: #ab8643;
    color: #fffcfb;
  }
`;

const MypostContainer = styled.div`
  width: 100%;
  height: 55vh;
  flex-direction: column;
`;

const TextContainer = styled.div`
  width: 80px;
  height: 20px;
  color: #ab8643;
  text-decoration: underline;
  text-underline-position: under;
  text-decoration-color: #d3b47b;
  margin-left: 30px;
`;

const Container2 = styled.div`
  width: 100%;
  height: 50vh;
  justify-content: center;
  text-align: center;
`;

const ImgContainer = styled.img`
  width: 180px;
  height: 200px;
`;

const TextContainer2 = styled.div`
  width: 200px;
  height: 50px;
  font-size: 20px;
  color: #ab8643;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  font-weight: lighter;
`;

const WriteLetterBtn = styled.button`
  height: 40px;
  width: 170px;
  font-size: 14px;
  cursor: pointer;
  background-color: rgb(252, 251, 251);
  color: #ab8643;
  line-height: 1px;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid #ab8643;
  outline: 0;
  &:hover {
    background-color: #ab8643;
    color: #fffcfb;
  }
`;

const MypostContainer2 = styled.div`
  width: 100%;
  height: 350px;
  margin-top: 22px;
  display: flex;
`;

const MoreBtn = styled.button`
  border: 2px solid #ab8643;
  width: 50px;
  height: 50px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: -15px;
  cursor: pointer;
  font-size: 30px;
  font-weight: bolder;
  border-radius: 30px;
  background-color: white;
  &:hover {
    box-shadow: -1px 1px 1px 1px gray;
  }
`;

function Mypage({ isLogin, handleLogout, accessToken }: IMypageProps) {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [templates, setTemplates] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [mytemplate, setMyTemplate] = useState({});
  const [isTemplateClick, setIisTemplateClick] = useState(false);
  useEffect(() => {
    setUserProfile();
  }, []);

  const setUserProfile = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URI}/mypage`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((result) => {
        setTemplates(result.data.templates);
        setName(result.data.user.name);
        setEmail(result.data.user.email);
        setGender(result.data.user.gender);
      });
  };

  const modalHandler1 = () => {
    setIsOpen1(!isOpen1);
  };

  const modalHandler2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleCheck = (template: object) => {
    setIisTemplateClick(!isTemplateClick);
    setMyTemplate(template);
  };

  return isTemplateClick ? (
    <MyTemplate template={mytemplate} />
  ) : (
    <div>
      <BackgroundContainer>
        <BackgroundImg>
          <MypageText>MYPAGE</MypageText>
        </BackgroundImg>
        <Container>
          <ProfileContainer>
            <ProfileImgContainer
              src={gender === "female" ? FemaleLogo : MaleLogo}
            ></ProfileImgContainer>
            <ProfileContentContainer>
              <Link to={{ pathname: "/" }}>
                <LogoutBtn onClick={handleLogout}>로그아웃</LogoutBtn>
              </Link>
              <NicknameContainer>{name}</NicknameContainer>
              <EmailContainer>{email}</EmailContainer>
              <PasswordContainer>비밀번호: ********</PasswordContainer>
              <ButtonContainer>
                <EditProfileBtn onClick={modalHandler1}>
                  프로필 편집
                </EditProfileBtn>
                <QuitBtn onClick={modalHandler2}>회원 탈퇴</QuitBtn>
                {isOpen1 ? (
                  <EditProfileModal ModalHandler={modalHandler1} />
                ) : null}
                {isOpen2 ? <QuitModal ModalHandler={modalHandler2} /> : null}
              </ButtonContainer>
            </ProfileContentContainer>
          </ProfileContainer>
          <MypostContainer>
            <TextContainer>내가 쓴 편지</TextContainer>
            {/* <Container2>
              <ImgContainer src={TypewriterImg}></ImgContainer>
              <TextContainer2>
                작성한 편지가 없습니다. 작성하러 가 볼까요?
              </TextContainer2>
              <WriteLetterBtn>편지쓰러 가기</WriteLetterBtn>
            </Container2> */}
            <MypostContainer2>
              {templates
                .map((template, idx) => {
                  return (
                    <Mypost
                      key={idx}
                      template={template}
                      handleCheck={handleCheck}
                    />
                  );
                })
                .slice(0, 3)}
              {templates.length < 3 ? <span></span> : <MoreBtn> 〉</MoreBtn>}
            </MypostContainer2>
          </MypostContainer>
        </Container>
      </BackgroundContainer>
    </div>
  );
}

export default Mypage;
