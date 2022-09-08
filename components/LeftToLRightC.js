import styled from "styled-components";
import WBtn from '../pages/supComponents/WBtn';

const Box = styled.section`
  width: 100%;
  margin: 2rem 0;
`;

const Main = styled.div`
  width: 70rem;
  height: 34vh;
  background-color: #fff;
  border-radius: 10px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media (max-width: 78rem) {
    width: 90%;
  }
`;

const Img = styled.img`
  width: 50%;
  height: 100%;
  border-radius: 10px;
`;
const ProInfo = styled.div`
  height: 100%;
  width: 50%;
  background-color: #eaeaea;
  border-radius: 10px;
  padding: 6rem 2rem;


  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  h2 {
    color: #000;
    font-size: 45px;
  }
`;

const LeftToLRightC = () => {
  return (
    <Box>
      <Main>
        <Img />
        <ProInfo>
          <h2>ZX7 SPEAKER</h2>
          <WBtn />
        </ProInfo>
      </Main>
    </Box>
  );
};

export default LeftToLRightC;
