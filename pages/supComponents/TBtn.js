
import  styled  from 'styled-components';


const Btn = styled.button`
border-radius: 0;
border: 0;
background-color: #d87d4a;
color: #fff;
padding: 1rem 1.7rem;
width: 11rem;
position: relative;
span{
    z-index:11;
}
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
    transition: transform .1s ease-in-out;
  }
  &:hover::before {
  transform-origin: top;
  transform: scaleY(1);
}
`

const SeePro = () => {
    return (
        <Btn ><span>SEE PRODUCT</span></Btn>
    )
}

export default SeePro