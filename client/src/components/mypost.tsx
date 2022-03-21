import styled from "styled-components";
import { Letter } from "../types/category";

const Container = styled.div`
  width: 232px;
  height: 350px;
  margin-left: 30px;
  box-shadow: -3px 3px 3px 3px gray;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: -5px 5px 5px 5px gray;
  }
`;

const LetterImg = styled.img`
  border: 1px solid #fff3dd;
  width: 160px;
  height: 230px;
  margin-top: 20px;
  background-image: url(${(props) => props.theme});
`;
const LetterContainer = styled.style`
  border: 1px solid #fff3dd;
  width: 160px;
  height: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.theme});
  @media (max-width: 76px) {
    width: 45px;
    height: 70px;
    background-size: 45px 70px;
    background-repeat: no-repeat;
  }
`;

const TextContainer = styled.textarea`
  resize: none;
  white-space: pre-wrap;
  border: none;
  overflow:hidden;
  background: transparent;
  width: 120px;
  height: 180px;
  text-align: center;
  font-size: ${(props) => `${props.theme[0]}px`};
  font-family: ${(props) => props.theme[1]};
  }
`;

const Container2 = styled.div`
  width: 160px;
  height: 50px;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;

const DateContainer = styled.div`
  width: 100px;
  height: 50px;
`;

const DateText = styled.div`
  width: 80px;
  height: 25px;
  text-align: left;
  color: #ab8643;
`;

const Date = styled.div`
  width: 80px;
  height: 25px;
  text-align: left;
  color: black;
`;

const QuitBtn = styled.button`
  height: 20px;
  width: 40px;
  font-size: 14px;
  cursor: pointer;
  background-color: rgb(252, 251, 251);
  color: #ab8643;
  line-height: 1px;
  margin-left: 20px;
  margin-top: 26px;
  border-radius: 5px;
  border: 1px solid #ab8643;
  outline: 0;
  &:hover {
    background-color: #ab8643;
    color: #fffcfb;
  }
`;

function Mypost(props: any) {
  const handleClick = () => {
    props.handleCheck(props.template);
  };
  return (
    <div>
      <Container onClick={handleClick}>
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
          ></TextContainer>
        </LetterContainer>
        <Container2>
          <DateContainer>
            <DateText>날짜</DateText>
            <Date>{props.template.created_at.split("T")[0]}</Date>
          </DateContainer>
          <QuitBtn>삭제</QuitBtn>
        </Container2>
      </Container>
    </div>
  );
}

export default Mypost;
