
import  styled  from 'styled-components';


const Btn = styled.button`
border: 1px solid #000;
background-color: rgba(0,0,0,0);
color: #000;
padding: .9rem 0;
width: 11rem;
position: relative;
&::before {
    content: 'SEE PRODUCT';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000;
    color: #fff;


    display: flex;
    align-items: center;
    justify-content: center;

    bottom: 0;
    left: 0;
    transform-origin: top;
    transform: scaleY(0);
    transition: transform .2s ease-in-out;
  }
  &:hover::before {
  transform-origin: top;
  transform: scaleY(1);
}
`

const WBtn = () => {
    return (
        <Btn >SEE PRODUCT</Btn>
    )
}

export default WBtn