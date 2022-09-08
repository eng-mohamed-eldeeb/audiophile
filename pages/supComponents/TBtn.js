
import  styled  from 'styled-components';


const Btn = styled.button`
border-radius: 0;
border: 0;
background-color: #d87d4a;
color: #fff;
padding: .9rem 0;
width: 9.5rem;
position: relative;
font-size: 14px;
font-weight: 500;

&::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #eaeaea4f;
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

const TBtn = () => {
    return (
        <Btn >SEE PRODUCT</Btn>
    )
}

export default TBtn