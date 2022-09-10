import styled from "styled-components";
import TBtn from './supComponents/TBtn';
import BBtn from './supComponents/BBtn';
const Box = styled.div`
  padding: 3rem;
  border-radius: 10px;
  background-color: #fff;
`;

const CheckoutCart = () => {
  return (
    <Box>
      <BBtn content="BACK TO PURCHASE" />
    </Box>
  );
};

export default CheckoutCart;
