import NavList from "./supComponents/NavList";
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import Cart from "./Cart";
import { useSelector } from 'react-redux';

const Main = styled.nav`
  width: 70rem;
  min-width: 700px;
  height: 100%;
  border-bottom: 1px solid #eaeaea4f;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 30px;
  }
  a {
    color: #fff;
  }

  @media (max-width: 75rem) {
    & {
      width: 90%;
    }
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

  .cart {
    cursor: pointer;
    position: relative;
    span {
      position: absolute;
      top: -10px;
      right: -20px;
      
      
      background-color: #d87d4a;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

    }
  }
`;

const MainNav = (props) => {
  const [cart, setCart] = useState(false);
  const disableCart = () => {
    setCart(() => !cart);
  };

  const amount = useSelector(state => state.reducer.totalQuantity)
  return (
    <>
      {cart ? (
        <>
          <Cart fun={disableCart} />
        </>
      ) : null}
      <Box color={props.color}>
        <Main>
          <h2>audiophile دسك توب</h2>
          <NavList />
          <div className="cart">
            <AiOutlineShoppingCart
              size={30}
              onClick={() => setCart(() => !cart)}
            />
            {amount > 0 ? <span>{amount}</span> : null}
          </div>
        </Main>
      </Box>
    </>
  );
};

export default MainNav;
