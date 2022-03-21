import React, { useState } from "react";
import styled from "styled-components";
import NoticeSave from "../components/noticeSave";
import Preview from "./preview";
import { Letter } from "../types/category";

const BackgroundContainer = styled.div`
  width: 100%;
  // height: 100vh;
  background-color: #fffcfb;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
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

const WriteContainer = styled.div`
  overflow-x: hidden;
`;

function MyTemplate(props: any) {
  const [content, setTextContent] = useState("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showPreviewModal, setShowPreviewModal] = useState<boolean>(false);

  const handleLetterRequest = () => {
    1;
  };

  const handleInputValue = (e: any) => {
    setTextContent(e.target.value);
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

  return (
    <div>
      <WriteContainer>
        <BackgroundContainer>
          <LetterContainer
            theme={
              Letter.filter(
                (letter) => letter.name === props.template.letter_type
              )[0].src
            }
          >
            <TextContainer
              id="text"
              theme={[props.template.font_size, props.template.font]}
              placeholder={props.template.content}
              onChange={handleInputValue}
            ></TextContainer>
          </LetterContainer>
          <BtnContainer>
            <PreviewBtn onClick={openPreviewModal}>미리보기</PreviewBtn>
            <SaveBtn onClick={handleLetterRequest}>수정</SaveBtn>
          </BtnContainer>
          <NoticeSave open={showModal} close={closeModal} />
          <Preview open={showPreviewModal} close={closePreviewModal} />
        </BackgroundContainer>
      </WriteContainer>
    </div>
  );
}

export default MyTemplate;
