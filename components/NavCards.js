import NavCard from "./../pages/supComponents/NavCard";
import styled from "styled-components";
import Link from "next/link";

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
        <Link href="/earphone">
          <NavCard />
        </Link>
        <Link href="/headphone">
          <NavCard />
        </Link>
        <Link href="/speakers">
          <NavCard />
        </Link>
      </Main>
    </Box>
  );
};

export default NavCards;
