import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  addASingleItemToCart,
  addItemToCart,
  removeAll,
  removeItemFromCart,
} from "./../../store/cart_slice";
import { useRouter } from "next/router";
import { useEffect } from "react";
import disableScroll from "disable-scroll";
import { ImCross } from "react-icons/im";
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
  height: 30rem;
  width: 25rem;
  top: 10%;
  right: 10%;
  background-color: #fdfdfd;
  border-radius: 10px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Btns = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  button {
    padding: 0.5rem 1.3rem;
    margin: 2rem;
    display: flex;
    align-items: center;
    border: none;
  }
  .red {
    background-color: #eb1d36;
    color: #fdfdfd;
  }
  .black {
    background-color: #000;
    color: #fff;
  }
`;

const Main = styled.div`
  align-self: flex-end;
  width: 100%;

  .total {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 2rem;
  }
  .checkout {
    padding: 1rem 1.3rem;
    width: 100%;
    text-align: center;
    font-size: 24px;
    font-weight: 800;
    display: flex;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    border: none;
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
  .cartBtns {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
  .cartBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 1.6rem;
    outline: none;
    border: 0;
    border-radius: 0;

    &:hover {
      background-color: #000;
      color: #fff;
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
  const { items, totalQuantity, totalPrice } = useSelector((state) => state);
  const { disableCart } = props;
  const dispatch = useDispatch();

  const removeAllProducts = () => {
    dispatch(removeAll());
  };

  const removeOne = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const addOne = (ob) => {
    dispatch(addASingleItemToCart(ob));
  };

  const router = useRouter();
  useEffect(() => {
    disableScroll.on();
    return function cleanup() {
      disableScroll.off();
    };
  }),
    [];

  return (
    <Div>
      <Box>
        <Btns>
          {items.length > 0 && (
            <button
              style={{ cursor: "pointer" }}
              onClick={removeAllProducts}
              className="removeAll black"
            >
              REMOVE ALL
            </button>
          )}
          <button
            className="red"
            style={{ cursor: "pointer", marginLeft: "auto" }}
            onClick={() => disableCart()}
          >
            <ImCross />
          </button>
        </Btns>
        <Items>
          {items.map((i) => (
            <li key={i.id}>
              <ItemInfo>
                <img src={i.main_img} />
                <div className="name_price">
                  <h5>{i.name}</h5>
                  <p>$ {i.price}</p>
                </div>
              </ItemInfo>
              <p>{i.quantity}</p>
              <div className="cartBtns">
                <button className="cartBtn" onClick={() => removeOne(i.id)}>
                  -
                </button>
                <button className="cartBtn" onClick={() => addOne(i.id)}>
                  +
                </button>
              </div>
            </li>
          ))}
        </Items>
        <Main>
          {items.length > 0 && (
            <div className="total">
              <p>total</p>
              <h4>$ {totalQuantity ? totalPrice : "0"}</h4>
            </div>
          )}
          <div>
            {totalQuantity === 0 ? (
              <h3 className="black checkout">NO ITEMS IN THIS LIST</h3>
            ) : (
              <button
                className="black checkout"
                onClick={() => {
                  disableCart();
                  router.push("./checkout");
                }}
              >
                <span>CHECKOUT</span>
              </button>
            )}
          </div>
        </Main>
      </Box>
    </Div>
  );
};

export default CartComponent;
