import styled from "styled-components";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Btn = styled(motion.button)`
  border: 1px solid #000;
  background-color: rgba(0, 0, 0, 0);
  color: #000;
  padding: 0.9rem 0;
  width: 9rem;
  height: 2.7rem;
  position: relative;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000;
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    bottom: 0;
    left: 0;
    transform-origin: top;
    transform: scaleY(0);
    transition: transform 0.2s ease-in-out;
  }
  &:hover::before {
    transform-origin: top;
    transform: scaleY(1);
  }
  span {
    z-index: 99;
    position: absolute;
  }

  &:hover span {
    color: #fff;
  }
`;

const WBtn = (props) => {
  const rout = useRouter();
  return (
    <Btn
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => rout.push(`/${props.id}`)}
    >
      <span>SEE PRODUCT</span>
    </Btn>
  );
};

export default WBtn;
