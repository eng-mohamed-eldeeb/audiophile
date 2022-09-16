import { useEffect, useState } from "react";
import styled from "styled-components";
import disableScroll from "disable-scroll";
// import cartSlice, { removeAll } from '../store/cart_slice';
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeAll, removeItemFromCart } from "./../../store/cart_slice";
import { useRouter } from "next/router";
import BBtn from "./BBtn";
import store from "./../../store/index";

const Box = styled.div`
  height: 30rem;
  width: 25rem;
  background-color: #fdfdfd;
  border-radius: 10px;
  position: absolute;
  right: 100%;
  top: 15%;

  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button {
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

  li {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: large;
    }
  }
`;

const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  .name_price {
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h5 {
      font-size: 20px;
    }
    p {
      font-size: 19px;
      font-weight: 500;
      color: rgba(1, 1, 1, 0.3);
    }
  }
  img {
    height: 5rem;
    border-radius: 10px;
  }
`;

const CartComponent = (props) => {
  const state = useSelector((state) => state.reducer);

  const dispatch = useDispatch();

  const removeEmAll = () => {
    dispatch(removeAll());
  };

  const removeOne = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const addOne = (ob) => {
    dispatch(addItemToCart(ob));
  };


  const rout = useRouter();
  return (
    <Box>
      <Btns>
        <button onClick={removeEmAll} className="removeAll">
          REMOVE ALL
        </button>
        <button onClick={props.fun}>x</button>
      </Btns>
      <Items>
        {state.items.map((i) => (
          <li key={i.id}>
            <ItemInfo>
              <img src={i.main_img} />
              <div className="name_price">
                <h5>{i.name}</h5>
                <p>$ {i.price}</p>
              </div>
            </ItemInfo>
            <p>{i.quantity}</p>
            <div>
              <button onClick={() => removeOne(i.id)}>-</button>
              <button onClick={() => addOne({newItem: i, amount: 1})}>+</button>
            </div>
          </li>
        ))}
      </Items>
      <Main>
        <div className="total">
          <p>total</p>
          <h4>$ {state.totalQuantity ? state.totalPrice : "0"}</h4>
        </div>
        <div className="cart_btn">
          {state.totalQuantity === 0 ? (
            <h3>'NO ITEMS IN THIS LIST'</h3>
          ) : (
            <button onClick={() => rout.push("./checkout")}>CHECKOUT</button>
          )}
        </div>
      </Main>
    </Box>
  );
};

export default CartComponent;
