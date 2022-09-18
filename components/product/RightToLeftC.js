import styled from "styled-components";
import { motion } from "framer-motion";
import WBtn from './../supComponents/WBtn';
import useAnimateInView from './../Hooks/useAnimateInView';

const Box = styled(motion.section)`
  width: 100%;
  margin: 2rem 0;
`;

const Main = styled.div`
  width: 69.48rem;
  height: 34vh;
  background-color: #eaeaea;
  background-image: url("https://a331998513.github.io/audiophile-ecommerce-website/static/media/image-speaker-zx7.3d4940e8.jpg");
  background-position: center;
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
const boxVariant = {
  visible: {
    opacity: 1,
    transition: { delay: 0.3, duration: 2, type: "spring" },
  },
  hidden: { opacity: 0 },
};

const RightToLeftC = (props) => {
  const [ref, control] = useAnimateInView();
  const data = props.data;
  return (
    <Box ref={ref} variants={boxVariant} initial="hidden" animate={control}>
      <Main>
        <h2>{data.name}</h2>
        <WBtn id={data.id} />
      </Main>
    </Box>
  );
};

export default RightToLeftC;
