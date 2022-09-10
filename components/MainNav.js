import NavList from "./supComponents/NavList";
import styled from "styled-components";
import Link from "next/link";
// import { AiOutlineShoppingCart } from 'react-icons/fa'
const  Main = styled.nav`
  width: 58.8%;
  min-width: 700px;
  height: 100%;
  border-bottom: 1px solid #eaeaea4f;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2{
    font-size: 30px;
  }
`;

const Box = styled.div`
  background-color: ${props => props.color};
  color: #fff;
  width: 100vw;
  height: 6.3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  z-index: 99;
`;



const MainNav = (props) => {
  return (
    <Box color={props.color}>
      <Main>
        <h2>audiophile</h2>
        <NavList />
        {/* <AiOutlineShoppingCart /> */}
        <Link href='/checkout'>
          Cart
        </Link>
      </Main>
    </Box>
  );
};

export default MainNav;
