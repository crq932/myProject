import styled from "styled-components";

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
  color: #000000;
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

function letterCategory(props: any) {
  const handleClick = () => {
    props.handleCheck(props.img);
  };

  return (
    <div>
      <Container onClick={handleClick}>
        <LetterImg src={props.img} />
        <Container2>
          <DateContainer>
            {/* <DateText>기념일</DateText> */}
            <Date>{props.name}</Date>
          </DateContainer>
        </Container2>
      </Container>
    </div>
  );
}

export default letterCategory;
