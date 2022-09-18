import styled from "styled-components";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Btn = styled(motion.button)`
  border-radius: 0;
  border: 0;
  background-color: #131313;
  color: #fff;
  padding: 0.9rem 0;
  width: 9.5rem;
  position: relative;
  font-size: 14px;
  font-weight: 500;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    color: #fff;
    background-color: #eaeaea4f;
    bottom: 0;
    left: 0;
    transform-origin: top;
    transform: scaleY(0);
    transition: transform 0.2s ease-in-out;
  }
  &:hover::before {
    transform-origin: top;
    transform: scaleY(1);
    &:hover {
      color: #fff;
    }
  }
`;

const BBtn = (props) => {
  const rout = useRouter();

  return (
    <Btn
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => rout.push(`/${props.id}`)}
    >
      {props.content ? props.content : "SEE PRODUCT"}
    </Btn>
  );
};

export default BBtn;
