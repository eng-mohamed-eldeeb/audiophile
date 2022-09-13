import NavList from "./supComponents/NavList";
import styled from "styled-components";
import Link from "next/link";
// import { AiOutlineShoppingCart } from 'react-icons/fa'
import { useState } from "react";
import Cart from "./Cart";
const Main = styled.nav`
  width: 58.8%;
  min-width: 700px;
  height: 100%;
  border-bottom: 1px solid #eaeaea4f;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 30px;
  }
`;

const Box = styled.div`
  background-color: ${(props) => props.color};
  color: #fff;
  width: 100vw;
  height: 6.3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  z-index: 98;
`;

const Button = styled.button``

const MainNav = (props) => {
  const [cart, setCart] = useState(false);
  const disableCart = () => {
    setCart(() => !cart)
  }
  return (
    <>
      {cart ? (
        <>
          <Cart fun={disableCart} />
        </>
      ) : null}
      <Box color={props.color}>
        <Main>
          <h2>audiophile</h2>
          <NavList />
          {/* <AiOutlineShoppingCart /> */}
          <a onClick={() => setCart(() => !cart)}>Cart</a>
        </Main>
      </Box>
    </>
  );
};

export default MainNav;
