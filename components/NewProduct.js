import styled from "styled-components";
import SeeBPro from "../pages/supComponents/BBtn";

const Box = styled.section`
  width: 100%;
  margin: 2rem 0;
`;

const Main = styled.div`
  width: 70rem;
  background-color: #d87d4a;
  height: 60vh;
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
  width: 30%;
  
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;


  align-items: left;
  color: white;
  h4 {
    color: #eaeaea4f;
  }
  h2 {
    font-size: 55px;
  }
  p {
    width: 80%;
  }
`;

const NewProduct = () => {
  return (
    <Box>
      <Main>
        <Img />
        <Conent>
          <h4>N E W &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; P R O D U C T</h4>
          <h2>ZX9 SPEAKER</h2>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <SeeBPro />
        </Conent>
      </Main>
    </Box>
  );
};

export default NewProduct;
