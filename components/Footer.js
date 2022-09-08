import styled from "styled-components";
import NavList from "./../pages/supComponents/NavList";
import NavLink from "next/link";

const Box = styled.footer`
  width: 100%;
  height: 39.5vh;
  background-color: #101010;
`;

const Main = styled.div`
  height: 100%;
  width: 60%;

  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Side = styled.div`
  color: #fff;
  width: 45%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  h3 {
    font-size: 30px;
    color: #fff;
  }
  p {
    color: #696969;
  }
  div {
    align-self: flex-end;
  }
`;

const SocialIcons = styled.div`
  width: 14rem;

  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Footer = () => {
  return (
    <Box>
      <Main>
        <Side>
          <h3>audiophile</h3>
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
        </Side>
        <Side>
          <div>
            <NavList />
          </div>
          <SocialIcons>
            <NavLink
              target="_blank"
              href={{ pathname: "https://twitter.com/eldeeb_3o" }}
            >
              twitter
            </NavLink>
            <NavLink
              style={{ color: "inherit" }}
              target="_blank"
              href={{ pathname: "https://github.com/eng-mohamed-eldeeb" }}
            >
              Github
            </NavLink>
            <NavLink
              style={{ color: "inherit" }}
              target="_blank"
              href={{
                pathname: "https://www.linkedin.com/in/eng-mohamed-eldeeb/",
              }}
            >
              LinkedIn
            </NavLink>
          </SocialIcons>
        </Side>
      </Main>
    </Box>
  );
};

export default Footer;
