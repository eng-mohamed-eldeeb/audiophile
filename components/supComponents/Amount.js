
import styled from 'styled-components';
import { useState } from 'react';


const Container = styled.div`
width: 6rem;

display: flex;
align-items: center;
justify-content: space-between;


background-color: #f1f1f1;
button {
    padding: 1rem;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
}

button:hover {
    color: #d87d4a;
}

 p {
    color: #000;
    font-size: large;
    font-weight: 500;
 }

`




const Amount = (props) => {
    const [amount, setAmount] = useState(1);
    props.fun(amount)
    return (
        <Container>
        <button onClick={amount > 1 ? () => setAmount(() => amount--) : null}>-</button>
        <p>{amount}</p>
        <button onClick={() => setAmount(() => amount++)}>+</button>
        </Container>
    )
}

export default Amount