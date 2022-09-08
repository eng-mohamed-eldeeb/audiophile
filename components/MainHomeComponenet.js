import styled from 'styled-components';
import TBtn from './../pages/supComponents/TBtn';

const Box = styled.section`
background-color: #191919;
height: 78vh;
width: 100%;
display: flex;
justify-content:center;
align-items: center;
`

const Main = styled.div`
height: 90%;
width: 58.5%;
display: flex;
justify-content: center;
align-items: center;
.div{
    background-color: #000;
    width:50%;
    height: 50%;
}
`

const Conent = styled.div`
height: 55%;
width: 50%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: left;
color: white;
h4{
    color: #eaeaea4f;
}
h2{
    font-size: 55px;
}
p{
    width: 80%;
}
`



const MainHomeComponenet = () => {
return (
    <Box>
        <Main>
            <Conent >
                <h4>N E W &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; P R O D U C T</h4>
                <h2>XX99 MARK II HEADPHONES</h2>
                <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <TBtn />
            </Conent>
            <img src='../img/mainHeadphone' width='50%' />
        </Main>
    </Box>
)
}

export default MainHomeComponenet