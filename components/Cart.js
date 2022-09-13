
import { useEffect } from 'react';
import  styled from 'styled-components';
import disableScroll from 'disable-scroll';
import BBtn from './supComponents/BBtn';

const Div = styled.div`
width: 100vw;
height: 100vh;
background-color: rgba(0,0,0,.3);
z-index: 99;
position: fixed;

display: flex;
justify-content: flex-end;


div {
    /* width: 100%;
    height: 100%; */
    position: relative;
}

`

const Box = styled.div`
min-height: 30rem;
width: 20rem;
background-color: #fdfdfd;
border-radius: 10px;
position: absolute;
right: 120%;
top: 15%;


display: flex;
justify-content: flex-end;

button {
    /* padding: 2rem 1rem; */
    width: 3rem;
    height: 5rem;
}
`

const Cart = (props) => {
    useEffect(()=>{
        disableScroll.on();
        return function cleanup (){
            disableScroll.off();
        }
    }
    );
    return <Div>
        <div>
            <Box>
                <button onClick={props.fun}>x</button>
                <button className='removeAll'>REMOVE ALL</button>
            </Box>
        </div>
    </Div>
}

export default Cart