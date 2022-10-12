import styled from "styled-components";
import { motion } from "framer-motion";
import useAnimateInView from "./Hooks/useAnimateInView";

const Box = styled.section`
  width: 100%;
  margin: 2rem 0;
  @media (max-width: 50rem) {
    display: none;
    
  }
`;

const Main = styled.div`
  width: 70rem;
  height: 90vh;
  border-radius: 10px;
  margin: 0 auto;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 90rem) {
    width: 90%;
    height: auto;
    flex-direction: column-reverse;
    text-align: center;
    img {
      height: 30rem;
    }
  }
  @media (max-width: 50rem) {
    width: 30rem;
    height: auto;
    flex-direction: column-reverse;
    text-align: center;
    img {
      height: 20rem;
    }
  }
  img {
    width: 37rem;
    height: 80%;
    border-radius: 10px;
  }

`;

const Conent = styled.div`
  height: 80%;
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
  @media (max-width: 78rem) {
    width: 90%;
    margin-top: 2rem;
    gap: 1rem;
  }
`;

const imgBoxVariant = {
  visible: { opacity: 1,rotateY: 0, transition: {  duration: 2, type: 'spring' } },
  hidden: { opacity: 0, rotateY: -90  }
  };
const pBoxVariant = {
  visible: { opacity: 1, transition: {   duration: 2, type: 'spring' } },
  hidden: { opacity: 0}
  };
const hBoxVariant = {
  visible: { opacity: 1, transition: {   duration: 2, type: 'spring' } },
  hidden: { x: [-50, 0], opacity: 0}
  };

const AboutS = () => {
  

  const [ref, control] = useAnimateInView()

  

  return (
    <Box>
      <Main>
        <Conent>
          <motion.h2
            iref={ref}
            variants={hBoxVariant}
            initial="hidden"
            animate={control}
          >
            BRINGING YOU THE
            <span> BEST</span> AUDIO GEAR
          </motion.h2>
          <motion.p ref={ref}
          variants={pBoxVariant}
          initial="hidden"
          animate={control} >
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </motion.p>
        </Conent>
        <motion.img
          ref={ref}
          variants={imgBoxVariant}
          initial="hidden"
          animate={control}
          src="https://a331998513.github.io/audiophile-ecommerce-website/static/media/image-best-gear.4d4a28e9.jpg"
        />
      </Main>
    </Box>
  );
};

export default AboutS;
