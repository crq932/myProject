import styled from "styled-components";

const Container = styled.div`
  width: 70vw;
  height: 120vh;
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
  width: 60vw;
  height: 95vh;
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
  color: black;
`;

const QuitBtn = styled.button`
  height: 50px;
  width: 120px;
  font-size: 20px;
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

// const Print = props => {
//   const { printRef } = props;

//   return <div ref={printRef}></div>
// }

function BsLetter(props: any) {
  return (
    <div>
      <Container>
        <LetterImg src={props.img} />
        <Container2>
          <DateContainer></DateContainer>
        </Container2>
        <QuitBtn>인쇄하기</QuitBtn>
        <QuitBtn>수정하기</QuitBtn>
      </Container>
    </div>
  );
}

export default BsLetter;
