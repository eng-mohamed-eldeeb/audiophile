import { useEffect } from "react";
import styled from "styled-components";
import disableScroll from "disable-scroll";
import BBtn from "./supComponents/BBtn";

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 99;
  position: fixed;

  display: flex;
  justify-content: flex-end;

  div {
    /* width: 100%;
    height: 100%; */
    position: relative;
  }
`;

const Box = styled.div`
  min-height: 30rem;
  width: 25rem;
  background-color: #fdfdfd;
  border-radius: 10px;
  position: absolute;
  right: 100%;
  top: 15%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button {
    /* padding: 2rem 1rem; */
    /* width: 5rem;
    height: 3rem; */
    padding: 0.5rem 1.3rem;

    margin: 2rem;
    display: flex;
    align-items: center;
    align-self: flex-start;
    border: none;
    background-color: #eb1d36;
    color: #fdfdfd;
  }
`;
const Btns = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .removeAll {
    background-color: #131313;
  }
`;

const Main = styled.div`
  align-self: flex-end;
  width: 100%;
  .cart_btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 2rem 2rem 2rem;
    padding: 1rem 0;
    color: #fdfdfd;
    background-color: #000;
  }
  .total {
    width: 100%;
    display: flex;
    justify-content: space-between;

    padding: 2rem;
  }
`;

const Cart = (props) => {
  useEffect(() => {
    disableScroll.on();
    return function cleanup() {
      disableScroll.off();
    };
  });

  return (
    <Div>
      <div>
        <Box>
          <Btns>
            <button className="removeAll">REMOVE ALL</button>
            <button onClick={props.fun}>x</button>
          </Btns>
          {/* items */}
          <Main>
            <div className="total">
              <p>total</p>
              <h4>$ 0</h4>
            </div>
            <div className="cart_btn">
              <h3>NO ITEMS IN THIS LIST</h3>
            </div>
          </Main>
        </Box>
      </div>
    </Div>
  );
};

export default Cart;
