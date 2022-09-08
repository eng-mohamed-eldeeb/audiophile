
import  styled  from 'styled-components';


const Btn = styled.button`
border-radius: 0;
border: 1px solid #000;
background-color: rgba(0,0,0,0);
color: #000;
padding: 1rem 1.7rem;
width: 11rem;
position: relative;
span{
    z-index:11;
}
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
    transition: transform .1s ease-in-out;
  }
  &:hover::before {
  transform-origin: top;
  transform: scaleY(1);
}
`

const SeeWPro = () => {
    return (
        <Btn ><span>SEE PRODUCT</span></Btn>
    )
}

export default SeeWPro