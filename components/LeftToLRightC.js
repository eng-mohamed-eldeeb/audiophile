import styled from "styled-components";
import SeeWPro from '../pages/supComponents/WBtn';

const Box = styled.section`
  width: 100%;
  margin: 2rem 0;
`;

const Main = styled.div`
  width: 70rem;
  background-color: #eaeaea;
  height: 40vh;
  border-radius: 10px;
  margin: 0 auto;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 78rem) {
    width: 90%;
  }
`;

const Img = styled.img`
  width: 30%;
  height: 70%;
`;
const Conent = styled.div`
  height: 55%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  h2 {
    color: #000;
    font-size: 55px;
  }
`;

const LeftToLRightC = () => {
  return (
    <Box>
      <Main>
        <Img />
        <Conent>
          <h2>ZX7 SPEAKER</h2>
          <SeeWPro />
        </Conent>
      </Main>
    </Box>
  );
};

export default LeftToLRightC;
