import styled from "styled-components";
import TBtn from "./supComponents/TBtn";
import { motion } from "framer-motion";
const Box = styled(motion.section)`
  margin: 9.5rem 0;
`;

const Main = styled(motion.div)`
  width: 70rem;
  height: 57vh;
  background-color: #fff;
  border-radius: 10px;

  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: all 0.4s ease;
  @media (max-width: 78rem) {
    width: 90%;
  }
  .imgContainer {
    width: 40%;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
  }
  img {
    height: 100%;
  }

  &:hover {
    box-shadow: 15px 15px 10px rgba(17, 17, 17, 0.51);
    transform: translate(-15px, -15px);
  }
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

const what = (itIs, newPro, img) => {
  const newProd = (NewPro) => {
    if (NewPro) {
      return <h5>N E W &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; P R O D U C T</h5>;
    }
    return null;
  };
  if (itIs) {
    return (
      <Main initial={{opacity:0}} animate={{opacity:1}}>
        <div className="imgContainer">
          <img src={img} />
        </div>

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
    <Main initial={{opacity:0}} animate={{opacity:1}}>
      <ProInfo>
        {newProd(newPro)}
        <h2>ZX7 SPEAKER</h2>
        <p>
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <TBtn />
      </ProInfo>
      <div className="imgContainer">
        <img src={img} />
      </div>
    </Main>
  );
};

const Product = (props) => {
  return (
    <Box >
      {what(props.isIt, props.newPro, props.img)}
    </Box>
  );
};

export default Product;
