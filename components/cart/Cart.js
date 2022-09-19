import { useEffect } from "react";
import styled from "styled-components";
import disableScroll from "disable-scroll";
import CartComponent from './CartComponent';

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 99;
  position: fixed;
  display: flex;
  justify-content: flex-end;

  div {
    position: relative;
  }
`;

const Cart = (props) => {
  return (
    <Div>
      <div>
        <CartComponent fun={props.fun} />
      </div>
    </Div>
  );
};

export default Cart;
