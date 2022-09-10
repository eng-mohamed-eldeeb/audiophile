import styled from "styled-components";
import { useState } from "react";
import CheckoutCart from './CheckoutCart';

const Contaioner = styled.div`
  width: 100vw;
  padding: 10rem 0 5rem 0;
  background-color: #f1f1f1;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;
`;

const Box = styled.div`
  width: 50rem;
  padding: 3rem;
  border-radius: 10px;
  background-color: #fff;
`;

const Main = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1rem;
  h1 {
    font-size: 40px;
    font-weight: 600;
  }
  h4 {
    color: #d87d4a;
    margin: 10px 0;
    font-size: 15px;
    font-weight: 450;
  }

  h5 {
    font-size: 17px;
    font-weight: 500;
  }

  h6 {
    font-size: 13px;
    font-weight: 500;
  }

  input {
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 1rem;
    margin-top: -10px;
    font-weight: 600;
  }

  input:focus {
    border: 1px solid #d87d4a;
  }

  .MD {
    display: flex;
    flex-direction: column;
    width: calc(50% - 1rem);
  }
  .All {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

const Pair = styled.div`
  width: 100%;
  gap: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
`;

const Payment = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .payment {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 15rem;
  }

  .payment_wrapper {
    padding: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    align-items: center;
    display: flex;
    align-items: center;
    gap: 0.7rem;
  }
`;

const Form = () => {
  const [mony, setMony] = useState(false);
  return (
    <Contaioner>
      <Box>
        <Main>
          <h1>CHECKOUT</h1>
          <h4>BILLING DETAILS</h4>
          <Pair>
            <div>
              <label for="name">
                <h6>Name</h6>
              </label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Handsome"
              ></input>
            </div>
            <div>
              <label for="email">
                <h6>Email Address</h6>
              </label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@example.com"
              ></input>
            </div>
          </Pair>
          <div className="MD">
            <label for="phone">
              <h6>Phone Number</h6>
            </label>
            <br />
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="+45555-0136"
            ></input>
          </div>
          <h4>SHIPPING INFO</h4>
          <div className="All">
            <label for="Address">
              <h6>Address</h6>
            </label>
            <br />
            <input
              type="text"
              id="Address"
              name="Address"
              placeholder="1137 Williams Avenue"
            ></input>
          </div>
          <Pair>
            <div>
              <label for="zip">
                <h6>zip code</h6>
              </label>
              <br />
              <input type="text" id="zip" name="zip" placeholder="1001"></input>
            </div>
            <div>
              <label for="city">
                <h6>City</h6>
              </label>
              <br />
              <input
                type="text"
                id="city"
                name="city"
                placeholder="example@example.com"
              ></input>
            </div>
          </Pair>
          <div className="MD">
            <label for="city">
              <h6>Country</h6>
            </label>
            <br />
            <input
              type="text"
              id="Country"
              name="Country"
              placeholder="EGYBT"
            ></input>
          </div>
          <h4>PAYMENT DETAILS</h4>
          <Payment>
            <h5>Payment method</h5>
            <div className="payment">
              <div className="payment_wrapper">
                <input
                  type="radio"
                  onClick={() => setMony(true)}
                  value="none"
                  id="e-Mony"
                  name="payment"
                  required
                />
                <label for="e-Mony" class="radio">
                  e-mony
                </label>
              </div>
              <div className="payment_wrapper">
                <input
                  onClick={() => setMony(false)}
                  type="radio"
                  value="none"
                  id="Cash"
                  name="payment"
                  
                  required
                />
                <label for="Cash" class="radio">
                  Cash on Delievery
                </label>
              </div>
            </div>
          </Payment>
          {mony ? (
            <p>
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          ) : (
            <Pair>
              <div>
                <label for="EMonyNuber">
                  <h6>e-Money Number</h6>
                </label>
                <br />
                <input
                  type="text"
                  id="EMonyNuber"
                  name="EMonyNuber"
                  placeholder="981372465981"
                ></input>
              </div>
              <div>
                <label for="ePin">
                  <h6>e-Money Pin</h6>
                </label>
                <br />
                <input
                  type="text"
                  id="ePin"
                  name="ePin"
                  placeholder="7643"
                ></input>
              </div>
            </Pair>
          )}
        </Main>
      </Box>
      <CheckoutCart />
    </Contaioner>
  );
};

export default Form;
