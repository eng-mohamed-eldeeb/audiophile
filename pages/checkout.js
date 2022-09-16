import MainNav from "../components/MainNav";
import Footer from "./../components/Footer";
import Form from "../components/Form";
import CartCheckout from "./../components/CartCheckout";
import styled from "styled-components";

const Contaner = styled.div`
  padding: 10rem 0 5rem 0;
  background-color: #f1f1f1;

  gap: 3rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

function checkout() {
  return (
    <>
      <MainNav color="#000" />
      <Contaner>
        <Form />
        <CartCheckout />
      </Contaner>
      <Footer />
    </>
  );
}

export default checkout;
