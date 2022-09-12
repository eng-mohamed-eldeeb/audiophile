import styled from 'styled-components';
import TBtn from './supComponents/TBtn';
import { motion } from 'framer-motion';

const Box = styled.section`
background-color: #191919;
height: 78vh;
width: 100%;
display: flex;
justify-content:center;
align-items: center;
overflow: hidden;
`

const Main = styled.div`
height: 90%;
width: 58.5%;
display: flex;
justify-content:flex-start;
align-items: center;

position: relative;

img {
    position: absolute;
    top: 10;
    left: 0;
    transition: all 2 ease;
}
`

const Conent = styled.div`
height: 50%;
width: 50%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: left;
color: white;
z-index: 10;
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



const MainHomeComponenet = (props) => {
    const data = props.data
return (
    <Box>
        <Main>
            <Conent >
                <motion.h4  animate={{ y: [-50, 0] }} transition={{ delay: -1, duration: 0.8}}>N E W &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; P R O D U C T</motion.h4>
                <motion.h2 initial={{opacity:0}} animate={{x: [-50,0], opacity: 1}} transition={{ delay: .7,duration: 0.8}}>{data.name}</motion.h2>
                <motion.p initial={{opacity: 0, x: 10}} animate={{opacity:1, x:0}} transition={{delay: 1.3,duration: 0.8}}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</motion.p>
                <TBtn id={data.id}/>
            </Conent>
            <motion.img initial={{opacity:1}} animate={{opacity: [1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1]}} transition={{delay: 2.8,duration: 1}} src="https://a331998513.github.io/audiophile-ecommerce-website/static/media/image-hero.55c18e98.jpg" />
        </Main>
    </Box>
)
}

export default MainHomeComponenet