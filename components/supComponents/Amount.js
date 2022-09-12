
import styled from 'styled-components';


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




const Amount = () => {
    return (
        <Container>
        <button >-</button>
        <p>1</p>
        <button >+</button>
        </Container>
    )
}

export default Amount