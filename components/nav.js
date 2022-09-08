import NavList from "../pages/supComponents/NavList";
import styled from "styled-components";
import img from "../img/cartIcon.png";
const Main = styled.nav`
  width: 58.8%;
  min-width: 700px;
  height: 100%;
  border-bottom: 1px solid #eaeaea4f;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Box = styled.div`
  background-color: #191919;
  color: #fff;
  width: 100%;
  height: 6.3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  z-index: 99;
`;



const MainNav = () => {
  return (
    <Box>
      <Main>
        <h2>audiophile</h2>
        <NavList />
        <img src={img} alt="cart" />
      </Main>
    </Box>
  );
};

export default MainNav;
