
import  styled  from 'styled-components';


const Btn = styled.button`
border-radius: 0;
border: 0;
background-color: #131313;
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
    color: #fff;
    background-color: #eaeaea4f;
    bottom: 0;
    left: 0;
    transform-origin: top;
    transform: scaleY(0);
    transition: transform .5s ease-in-out;
  }
  &:hover::before {
  transform-origin: top;
  transform: scaleY(1);
  &:hover {
  color: #fff;

  }
  span{
    z-index: 3;
  }
}
`

const BBtn = (props) => {
    return (
        <Btn >{props.content ? props.content : 'SEE PRODUCT'}</Btn>
    )
}

export default BBtn