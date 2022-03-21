import React, { useState } from "react";
import styled from "styled-components";
import Headerimg from "../images/header.png";
import { Link } from "react-router-dom";
import Letterverse from "../components/letterverse";
import BigScreen from "./bigScreen";
import LetterCategory from "../components/lettercomponents/letterCategory";
import { thxs, congs, reqs } from "../types/category";

const HeaderContainer = styled.div`
  width: 100vw;
  height: 70vh;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  position: relative;
  background-image: url(${Headerimg});
  background-size: cover;
  color: white;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Template = styled.img`
  width: 200px;
  height: 300px;
  line-height: 20px;
  align-items: center;
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
`;
const Plusimg1 = styled.img`
  width: 40px;
  height: 40px;
`;
const Templatebox = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
  justify-content: space-around;
`;
const TpTitle = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  display: flex;
  color: #090909;
  background-color: #f6ecda;
`;
const TextContainer = styled.div`
  width: 100%;
  height: 70px;
  align-items: center;
  display: flex;
  color: #090909;
  background-color: #f0e0c1;
`;
const MoreBtn = styled.button`
  border: 1px solid #ab8643;
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
const LandingContainer = styled.div`
  overflow-x: hidden;
`;

function Main() {
  const tpTitle: string[] = ["감사인사", "축하", "제안 및 요청", "무제"];
  const [isChecked, setIsChecked] = useState(false); //체크여부
  const [checkedItems, setCheckedItems] = useState(new Set()); // 체크요소
  const [letter, setLetter] = useState("");
  const handleCheck = (main: string) => {
    setIsChecked(!isChecked);
    setLetter(main);
  };
  return isChecked ? (
    <BigScreen img={letter} />
  ) : (
    <>
      <LandingContainer>
        <HeaderContainer />
        <TextContainer>
          <div>기념일</div>
        </TextContainer>
        <br />
        <Templatebox>
          {thxs.map((thx, idx) => {
            return (
              <LetterCategory
                key={idx}
                img={thx.img}
                name={thx.name}
                handleCheck={handleCheck}
              />
            );
          })}
          <Link to="/thank">
            <MoreBtn>{">"}</MoreBtn>
          </Link>
        </Templatebox>
        <br />
        <TextContainer>
          <div>축하</div>
        </TextContainer>
        <br />
        <Templatebox>
          {congs.map((thx, idx) => {
            return (
              <LetterCategory
                key={idx}
                img={thx.img}
                name={thx.name}
                handleCheck={handleCheck}
              />
            );
          })}
          <Link to="/congratulaion">
            <MoreBtn>{">"}</MoreBtn>
          </Link>
        </Templatebox>
        <br />
        <TextContainer>
          <div>제안 및 요청</div>
        </TextContainer>
        <br />
        <Templatebox>
          {reqs.map((thx, idx) => {
            return (
              <LetterCategory
                key={idx}
                img={thx.img}
                name={thx.name}
                handleCheck={handleCheck}
              />
            );
          })}
          <Link to="/request">
            <MoreBtn>{">"}</MoreBtn>
          </Link>
        </Templatebox>
        <br />
        <TextContainer>
          <div>무제</div>
        </TextContainer>
        <br />
        <Templatebox>
          <Letterverse />
        </Templatebox>
      </LandingContainer>
    </>
  );
}

export default Main;
