import React, { useState } from "react";
import styled from "styled-components";
import one from "../images/1.png";
import two from "../images/2.jpeg";
import three from "../images/3.png";
import four from "../images/4.png";
import five from "../images/5.jpg";
import { fontList } from "../font/fontList";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NoticeSave from "../components/noticeSave";
import Preview from "./preview";

type Letter = {
  name: string;
  src: string;
};

const Letter: Letter[] = [
  { name: "one", src: one },
  { name: "two", src: two },
  { name: "three", src: three },
  { name: "four", src: four },
  { name: "five", src: five },
];

const TopContainer = styled.div`
  width: 100%;
  height: 160px;
  background-color: #fffcfb;
`;

const BackgroundContainer = styled.div`
  width: 100%;
  // height: 100vh;
  background-color: #fffcfb;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`;

const RadioContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 100px;
  @media (max-width: 768px) {
    width: 100%;
    height: 700px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 200px));
  }
`;

const Label = styled.label`
  width: 150px;
  height: 200px;
  display: inline-block;
`;

const RadioBtn = styled.input.attrs({ type: "radio" })`
  display: none;
  &:checked + ${Label} {
    outline: 2px solid rgba(171, 134, 67, 0.7);
  }
`;

const Image = styled.img`
  height: 200px;
  width: 150px;
`;

const FontContainer = styled.div`
  width: 100%;
  height: 100px;
  padding-top: 50px;
  flex-direction: row;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const FontContentContainer = styled.div`
  width: 280px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FontContent = styled.select`
  width: 140px;
  height: 35px;
  border: 1px solid #ab8643;
  border-radius: 8px;
  color: #ab8643;
`;

// const FontSizeContent = styled.input.attrs({
//   placeholder: "글자크기",
//   type: "number",
//   min: "8",
//   max: "96",
// })`
//   width: 100px;
//   height: 30px;
//   border: 1px solid #ab8643;
//   border-radius: 8px;
//   background-color: white;
//   display: flex;
//   align-items: center;
//   color: #ab8643;
// `;

const FontSizeContent = styled.div`
  width: 100px;
  height: 30px;
  background-color: #ab8643;
  display: flex;
  align-items: center;
`;

const FontSizePlusMinus = styled.div`
  height: 25px;
  width: 20px;
  color: white;
  cursor: pointer;
  text-align: center;
  padding-top: 12px;
  padding-left: 3px;
`;

const FontSizeText = styled.div`
  width: 50px;
  height: px;
  font-size: 0.9rem;
  color: white;
  text-align: center;
`;

const LetterContainer = styled.style`
  width: 700px;
  height: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.theme});
  @media (max-width: 768px) {
    width: 450px;
    height: 700px;
    background-size: 450px 700px;
    background-repeat: no-repeat;
  }
`;

// const TextContainer = styled.input.attrs({
//   placeholder: "템플릿이 들어갈 자리입니다.",
//   type: "textarea",
// })`
//   resize: none;
//   white-space: pre-wrap;
//   background: transparent;
//   width: 600px;
//   height: 600px;
//   border: 1px solid red;
//   text-align: center;
//   font-size: ${(props) => `${props.theme[0]}px`};
//   font-family: ${(props) => props.theme[1]};
//   @media (max-width: 768px) {
//     width: 80%;
//     height: 400px;
//   }
// `;

const TextContainer = styled.textarea`
  resize: none;
  white-space: pre-wrap;
  background: transparent;
  width: 600px;
  height: 600px;
  border: 1px solid red;
  text-align: center;
  font-size: ${(props) => `${props.theme[0]}px`};
  font-family: ${(props) => props.theme[1]};
  @media (max-width: 768px) {
    width: 80%;
    height: 400px;
  }
`;

const BtnContainer = styled.div`
  width: 350px;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const PreviewBtn = styled.button`
  width: 130px;
  height: 50px;
  font-size: 19px;
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
  @media (max-width: 768px) {
    width: 90px;
    height: 40px;
    font-size: 15px;
  }
`;

const SaveBtn = styled.button`
  width: 130px;
  height: 50px;
  font-size: 19px;
  font-family: "Noto Sans KR";
  cursor: pointer;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(171, 134, 67, 1);
  border-radius: 5px;
  border: 1px solid rgba(171, 134, 67, 1);
  &:hover {
    background-color: rgba(171, 134, 67, 1);
    border: 1px solid rgba(255, 255, 255, 1);
    color: rgba(255, 255, 255, 1);
  }
  @media (max-width: 768px) {
    width: 90px;
    height: 40px;
    font-size: 15px;
  }
`;

// interface ILetter {
//   name: string;
//   initialSrc: Letter;
// }

const WriteContainer = styled.div`
  overflow-x: hidden;
`;

function Write() {
  const [checked, setChecked] = useState<Letter>({ name: "1", src: one });
  const [font, setFontType] = useState("Handletter");
  const [font_size, setFontSize] = useState(20);
  const [content, setTextContent] = useState("");
  const [letter_type, setLetterType] = useState("one");
  const [category, serCategory] = useState("thx");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showPreviewModal, setShowPreviewModal] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleLetterRequest = () => {
    axios
      .post(
        `${process.env.REACT_APP_SERVER_URI}/writeletter`,
        { content, category, font, font_size, letter_type },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((result) => {
        result;
        navigate("/");
      });
  };

  const handleInputValue = (e: any) => {
    setTextContent(e.target.value);
  };

  const openModal = () => {
    setShowModal(!showModal);
    console.log("모달", showModal);
  };

  const closeModal = () => {
    setShowModal(!showModal);
  };

  const openPreviewModal = () => {
    setShowPreviewModal(!showPreviewModal);
  };

  const closePreviewModal = () => {
    setShowPreviewModal(!showPreviewModal);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const selected = Letter.filter((letter) => letter.name === value);
    if (selected) {
      setChecked(selected[0]);
      setLetterType(value);
      // console.log("여기여기", selected[0]);
    }
  };

  const onClick = (cor: string) => () => {
    if (cor === "+") setFontSize(font_size + 1);
    else setFontSize(font_size - 1);
  };

  const handleFontset = (e: any) => {
    setFontType(e.target.value);
  };

  return (
    <div>
      <WriteContainer>
        <TopContainer />
        <BackgroundContainer>
          <RadioContainer>
            {Letter.map((letter) => (
              <div key={letter.name}>
                <RadioBtn
                  id={letter.name}
                  name="letter-selector"
                  value={letter.name}
                  checked={letter.name === checked.name}
                  onChange={handleChange}
                />
                <Label htmlFor={letter.name}>
                  <Image src={letter.src} />
                </Label>
              </div>
            ))}
          </RadioContainer>
          <FontContainer>
            <FontContentContainer>
              <FontContent onChange={handleFontset}>
                {fontList.map((font, idx) => {
                  return (
                    <option key={idx} value={font.font}>
                      {font.name}
                    </option>
                  );
                })}
              </FontContent>
            </FontContentContainer>
            {/* <FontSizeContent id="fontSize" onClick={onClick}> */}
            <FontSizeContent>
              <FontSizePlusMinus onClick={onClick("+")}>+</FontSizePlusMinus>
              <FontSizeText>글자크기</FontSizeText>
              <FontSizePlusMinus onClick={onClick("-")}>-</FontSizePlusMinus>
            </FontSizeContent>
            {/* </FontSizeContent> */}
          </FontContainer>
          <LetterContainer theme={checked.src}>
            <TextContainer
              id="text"
              theme={[font_size, font]}
              placeholder="템플릿이 들어갈 자리입니다."
              onChange={handleInputValue}
            ></TextContainer>
          </LetterContainer>
          <BtnContainer>
            <PreviewBtn onClick={openPreviewModal}>미리보기</PreviewBtn>
            <SaveBtn onClick={handleLetterRequest}>저장</SaveBtn>
          </BtnContainer>
          <NoticeSave open={showModal} close={closeModal} />
          <Preview open={showPreviewModal} close={closePreviewModal} />
        </BackgroundContainer>
      </WriteContainer>
    </div>
  );
}

export default Write;
