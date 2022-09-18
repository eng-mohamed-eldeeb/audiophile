import { useEffect, useState } from "react";
import styled from "styled-components";
import disableScroll from "disable-scroll";
// import cartSlice, { removeAll } from '../store/cart_slice';
import { useDispatch, useSelector } from "react-redux";
import { removeAll } from "../../store/cart_slice";
import { useRouter } from 'next/router';
import CartCheckout from './CartCheckout';
import BBtn from './../supComponents/BBtn';
import store from './../../store/index';
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

const Items = styled.ul`
  width: 100%;
  background-color: #fdfdfd;
  color: #131313;
  padding: 2rem;
  list-style: none;

  /* height: 5rem; */
 
  li {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    p{
      font-size: large;
    }
  }
  
  `;


const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: .7rem;
  .name_price {
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h5 {
      font-size: 20px;
    }
    p{
      font-size: 19px;
      font-weight: 500;
      color: rgba(1,1,1,.3)
      
    }
    
  }
  img {
    height: 5rem;
    border-radius: 10px;
  }
  `


const Cart = (props) => {
  // const state = useSelector(state => state.reducer)
  useEffect(() => {
    disableScroll.on();
    return function cleanup() {
      disableScroll.off();
    };
  }),[];
  

  



  return (
    <Div>
      <div>
        <CartComponent fun={props.fun}/>
      </div>
    </Div>
  );
};

export default Cart;
