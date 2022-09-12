import styled from "styled-components";
import BBtn from "./supComponents/BBtn";
import { motion } from 'framer-motion';

const Box = styled(motion.section)`
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
  justify-content: flex-end;
  align-items: center;

  position: relative;
  overflow: hidden;
  @media (max-width: 78rem) {
    width: 90%;
  }

  img {
    width: 20rem;

    position: absolute;
    bottom: -.4rem;
    left: 8rem;
    z-index: 0;
;  }
`;

const Conent = styled.div`
  height: 55%;
  width: 40%;
  
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;


  align-items: left;
  color: white;
  z-index: 1;
  h4 {
    color: #eaeaea4f;
  }
  h2 {
    font-size: 45px;
  }
  p {
    font-weight: 200;
    width: 80%;
  }
`;

const PremiumProduct = (props) => {
  const data = props.data
  return (
    <Box>
      <Main>
        <motion.img initial={{opacity: 0}} animate={{y: [100,10], opacity:1}} transition={{delay:2, duration: .7}} src="https://a331998513.github.io/audiophile-ecommerce-website/static/media/image-speaker-zx9.153cd899.png" />
        <Conent>
          <h2>{data.name}</h2>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <BBtn id={data.id}/>
        </Conent>
      </Main>
    </Box>
  );
};

export default PremiumProduct;
