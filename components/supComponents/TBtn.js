import styled from "styled-components";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

const Btn = styled(motion.button)`
  border-radius: 0;
  border: 0;
  background-color: #d87d4a;
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
  }
`;

const TBtn = (props) => {
  const rout = useRouter();
  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(props.action({ newItem: props.data, amount: props.amount }));
  };
  return (
    <Btn
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      whileTap={{ scale: 0.9 }}
      onClick={!props.action ? () => rout.push(`/${props.id}`) : () => addItem()}
    >
      {props.content ? props.content : "SEE PRODUCT"}
    </Btn>
  );
};

export default TBtn;
