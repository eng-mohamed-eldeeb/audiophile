import NavCard from "./NavCard";
import styled from "styled-components";
import NavLink from "next/link";

const Box = styled.div`
  width: 100%;
  padding: 13vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Main = styled.div`
  width: 65%;
  height: 35vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.4rem;
`;

const NavCards = () => {
  return (
    <Box>
      <Main>
        <NavLink href="/earphone">
          <NavCard />
        </NavLink>
        <NavLink href="/headphone">
          <NavCard />
        </NavLink>
        <NavLink href="/speakers">
          <NavCard />
        </NavLink>
      </Main>
    </Box>
  );
};

export default NavCards;
