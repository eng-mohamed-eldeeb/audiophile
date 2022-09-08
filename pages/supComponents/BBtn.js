
import  styled  from 'styled-components';


const Btn = styled.button`
border-radius: 0;
border: 0;
background-color: #131313;
color: #fff;
padding: 1rem 1.7rem;
width: 11rem;
position: relative;
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
    transition: transform .1s ease-in-out;
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

const SeeBPro = () => {
    return (
        <Btn ><span>SEE PRODUCT</span></Btn>
    )
}

export default SeeBPro