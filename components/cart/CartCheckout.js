import styled from "styled-components";
import { useSelector } from "react-redux";
import TBtn from './../supComponents/TBtn';

const Box = styled.div`
  min-height: 30rem;
  width: 25rem;
  background-color: #fff;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  gap: 2rem;
`;
const Items = styled.ul`
  width: 100%;
  background-color: #fdfdfd;
  color: #131313;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: .5rem;

  li {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

  }
  p {
    font-size: 19px;
    font-weight: 500;
    color: rgba(1, 1, 1, 0.3);
  }
  .grand_total {
    margin-top: 2rem;

    p {
        color: #d87d4a;
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
  }
  img {
    height: 5rem;
    border-radius: 10px;
  }
`;

const CartCheckout = () => {
  const data = useSelector((state) => state);
  const shipping = data.totalPrice > 0 ? 50 : 0;
  const grand_total = data.totalPrice + shipping + data.VAT;
  return (
    <Box>
      <Items>
        {data.items.map((i) => (
          <li key={i.id}>
            <ItemInfo>
              <img src={i.main_img} />
              <div className="name_price">
                <h5>{i.name}</h5>
                <p>$ {i.price}</p>
              </div>
            </ItemInfo>
            <p>X {i.quantity}</p>
          </li>
        ))}
      </Items>

      <Items>
        <li><h4>TOTAL</h4><p>$ {data.totalPrice}</p></li>
        <li><h4>SHIPPING</h4><p>$ {shipping}</p></li>
        <li><h4>VAT (INCLUDED)</h4><p>$ {data.VAT}</p></li>
        <li className="grand_total"><h4>GRAND TOTAL</h4><p>$ {grand_total}</p></li>
      </Items>
    </Box>
  );
};

export default CartCheckout;
