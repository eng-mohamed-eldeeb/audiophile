import NavCard from "./NavCard";
import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";
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
        <Link href="/headphone">
          <a>
            <NavCard head="HEADPHONE" img="https://a331998513.github.io/audiophile-ecommerce-website/static/media/image-headphones.fbd401d9.png" />
          </a>
        </Link>
        <Link href="/speakers">
          <a>
            <NavCard head="SPEAKERS" img="https://a331998513.github.io/audiophile-ecommerce-website/static/media/image-speakers.bbb1a70b.png" />
          </a>
        </Link>
        <Link href="/earphone">
          <a>
            <NavCard head="EARPHONE" img="https://a331998513.github.io/audiophile-ecommerce-website/static/media/image-earphones.6e8830d4.png" />
          </a>
        </Link>
      </Main>
    </Box>
  );
};

export default NavCards;
