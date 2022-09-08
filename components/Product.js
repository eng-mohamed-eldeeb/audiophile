import styled from "styled-components";
import TBtn from "./../pages/supComponents/TBtn";

const Box = styled.section`
  width: 100%;
  margin: 9.5rem 0;
`;

const Main = styled.div`
  width: 70rem;
  height: 57vh;
  background-color: #fff;
  border-radius: 40px;

  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 78rem) {
    width: 90%;
  }
`;

const Img = styled.img`
  width: 50%;
  height: 100%;
  background-color: #eaeaea;
`;
const ProInfo = styled.div`
  height: 100%;
  width: 50%;

  display: flex;
  flex-direction: column;
  padding-left: 3rem;
  justify-content: center;
  gap: 2rem;
  color: white;
  h2 {
    color: #000;
    font-size: 45px;
  }
  h5 {
    font-size: 20px;
    font-weight: 450;
    color: #d88361d3;
  }
  p {
    color: rgba(0, 0, 0, 0.65);
    font-size: 17px;
    font-weight: 300;
  }
`;


const what = (itIs, newPro) => {
  const newProd = NewPro => {
    if(NewPro) {
              return (<h5>N E W &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; P R O D U C T</h5>)
              } 
              return null
  }
  if (itIs) {
    return (
      <Main>
        <Img />
        <ProInfo>
          {newProd(newPro)}
          <h2>ZX7 SPEAKER</h2>
          <p>
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <TBtn />
        </ProInfo>
      </Main>
    );
  }
  return (
      <Main>
        <ProInfo>
        {newProd(newPro)}
          <h2>ZX7 SPEAKER</h2>
          <p>
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <TBtn />
        </ProInfo>
        <Img />
      </Main>
    );
};

const Product = (props) => {
  return (
    <Box>
      {what(props.isIt, props.newPro)}
    </Box>
  );
};

export default Product;
