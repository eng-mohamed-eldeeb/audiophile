import styled from "styled-components";
import { motion } from 'framer-motion';

const Box = styled.section`
  width: 100%;
  margin: 2rem 0;
`;

const Main = styled.div`
  width: 70rem;
  height: 90vh;
  border-radius: 10px;
  margin: 0 auto;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 78rem) {
    width: 90%;
  }
  img {
    width: 50%;
  height: 70%;
  border-radius: 10px;
  }
`;

const Conent = styled.div`
  height: 55%;
  width: 37%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: white;
  h2 {
    color: #000;
    font-size: 35px;
  }
  span {
    color: #d87d4a;
  }
  p {
    color: #a2a2a2;
  }
`;

const AboutS = () => {
  return (
    <Box>
      <Main>
        <Conent>
          <motion.h2 initial={{opacity:0}} animate={{x: [-50,0], opacity: 1}} transition={{ delay: 2}}>
            BRINGING YOU THE
            <span> BEST</span> AUDIO GEAR
          </motion.h2>
          <motion.p initial={{opacity: 0}} animate={{opacity:1}} transition={{delay: 2.5}}>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </motion.p>
        </Conent>
        <img src="https://a331998513.github.io/audiophile-ecommerce-website/static/media/image-best-gear.4d4a28e9.jpg" />
      </Main>
    </Box>
  );
};

export default AboutS;
