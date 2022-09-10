import styled from "styled-components";
import { motion } from 'framer-motion';

const Box = styled(motion.section)`
  background-color: #000;
  height: 36.6vh;
  color: #fff;
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  h1{
      font-size: 40px;
    margin-top: 5rem;
  }
`;

const HSubPageoComponent = (props) => {
  return (
    <Box initial={{y: -100}} animate={{y:0}} transition={{type: "spring"}}>
      <motion.h1 initial={{scale:0}} animate={{scale:1}} transition={{delay: .4, duration: 0.4}}>{props.Title}</motion.h1>
    </Box>
  );
};

export default HSubPageoComponent;
