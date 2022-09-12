import styled from "styled-components";
import WBtn from "./supComponents/WBtn";
import { motion } from 'framer-motion';

const Box = styled(motion.section)`
  width: 100%;
  margin: 2rem 0;
`;

const Main = styled.div`
  width: 69.48rem;
  height: 34vh;
  background-color: #eaeaea;
  background-image: url("https://a331998513.github.io/audiophile-ecommerce-website/static/media/image-speaker-zx7.3d4940e8.jpg");
  background-repeat: no-repeat;
  border-radius: 10px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  padding-left: 4rem;
  align-items: flex-start;

  @media (max-width: 78rem) {
    width: 90%;
  }
  h2 {
    color: #000;
    font-size: 37px;
    font-weight: 400;
  }
`;

const RightToLeftC = (props) => {
  const data = props.data
  return (
    <Box initial={{opacity: 0}} animate={{opacity:1}} transition={{delay: 1, duration: .7}}>
      <Main>
        <h2>{data.name}</h2>
        <WBtn id={data.id} />
      </Main>
    </Box>
  );
};

export default RightToLeftC;
