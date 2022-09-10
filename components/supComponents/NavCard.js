import styled from "styled-components";
import { motion } from 'framer-motion';

const Card = styled.div`
  height: 100%;
  width: 340px;
  background-size: 64%;
  background-position: center center;
  background-repeat: no-repeat;
  background: linear-gradient(0, #f1f1f1 70%, rgba(144, 144, 144, 0) 0);
  border-radius: 10px;

  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  img {
    width: 80%;
  }

  h4 {
    font-size: 1.4rem;
    font-weight: 500;

  }

`;

const NavCard = (props) => {
  return (
    <Card
      
    >
      <motion.img whileHover={{ scale: [null, 0.9, 1.1, 1] }}
      transition={{ duration: 0.3 }} src={props.img} />
      <h4>{props.head}</h4>
      <p>shop</p>
    </Card>
  );
};

export default NavCard;
