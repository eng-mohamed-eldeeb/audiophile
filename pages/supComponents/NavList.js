// const NavLink = styled(NavNavLink)``;
import NavLink from "next/link";
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  width: 24rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .bk {
    color: #d87d4a;
  }
  .hover {
    color: #0000;
    background: linear-gradient(90deg, #d87d4a 50%, #000 0) var(--_p, 100%) 200%
      no-repeat;
    -webkit-background-clip: text;
    background-clip: text;
    transition: 0.4s;
  }
  .hover:hover {
    --_p: 0%;
  }
`;

const NavList = () => {
    return (
        <List>
          <li>
            <NavLink className={(isActive) =>
                "hover" + (!isActive ? " bk" : "")
              } href="/">HOME</NavLink>
          </li>
          <li>
            <NavLink
              className={(isActive) =>
                "hover" + (!isActive ? " bk" : "")
              }
              href="/earphone"
            >
              earphone
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(isActive) =>
                "hover" + (!isActive ? " bk" : "")
              }
              href="/headphone"
            >
              headphone
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(isActive) =>
                "hover" + (!isActive ? " bk" : "")
              }
              href="/speakers"
            >
              speakers
            </NavLink>
          </li>
        </List>
    )
}

export default NavList