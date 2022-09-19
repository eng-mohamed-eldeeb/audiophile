import Footer from "./../components/Footer";
import styled from "styled-components";
import MainNav from './../components/MainNav';
import Form from './../components/Form';
import CartCheckout from './../components/cart/CartCheckout';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadCartState } from "../store/cart_slice";

const Contaner = styled.div`
  padding: 10rem 0 5rem 0;
  background-color: #f1f1f1;

  gap: 3rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

function Checkout() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadCartState())
  }, [])
  return (
    <>
      <Contaner>
        <Form />
        <CartCheckout />
      </Contaner>
    </>
  );
}

export default Checkout;
