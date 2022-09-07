import Link from "next/link";
import styled from "styled-components";

const Main = styled.nav`
  width: 58.8%;
  height: 100%;
  border-bottom: 1px solid #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Box = styled.div`
  background-color: #100720;
  color: #fff;
  width: 100%;
  height: 6.3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const List = styled.ul`
list-style: none;
width: 28%;
display: flex;
align-items: center;
justify-content: space-between;
`;

const MainNav = () => {
  return (
    <Box>
      <Main>
        <h2>ELdeep</h2>
        <List>
          <li>
            <Link href="/earphone">earphone</Link>
          </li>
          <li>
            <Link href="/headphone">headphone</Link>
          </li>
          <li>
            <Link href="/speakers">speakers</Link>
          </li>
        </List>
        <h2>mother fucker</h2>
      </Main>
    </Box>
  );
};

export default MainNav;
