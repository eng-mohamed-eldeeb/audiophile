import styled from "styled-components";
import TBtn from "./supComponents/TBtn";
import { motion } from "framer-motion";
import useAnimateInView from "./Hooks/useAnimateInView";

const Box = styled(motion.section)`
  margin: 9.5rem 0;
`;

const Main = styled(motion.div)`
  width: 70rem;
  height: 60.5vh;
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
    display: flex;
    justify-content: center;
    align-items: center;
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

const boxVariant = {
  visible: {
    opacity: 1,
    transition: {duration: 1, type: "spring" },
  },
  hidden: { opacity: 0 },
};

const Product = (props) => {
  const [ref, control] = useAnimateInView();
  const data = props.data;
  return (
    <Box>
      {props.itIs ? (
        <Main
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
        >
          <div className="imgContainer">
            <img src={data.main_img} />
          </div>

          <ProInfo>
            {props.newPro ? (
              <h5>N E W &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; P R O D U C T</h5>
            ) : null}
            <h2>
              {data.name}
              <br /> {props.title}
            </h2>
            <p>
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <TBtn id={data.id} />
          </ProInfo>
        </Main>
      ) : (
        <Main ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}>
          <ProInfo>
            {props.itIs ? (
              <h5>N E W &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; P R O D U C T</h5>
            ) : null}
            <h2>
              {data.name}
              <br />
              {props.title}
            </h2>
            <p>
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <TBtn id={data.id} />
          </ProInfo>
          <div className="imgContainer">
            <img src={data.main_img} />
          </div>
        </Main>
      )}
    </Box>
  );
};

export default Product;
