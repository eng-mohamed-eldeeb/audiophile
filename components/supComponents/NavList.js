// const NavLink = styled(NavNavLink)``;
import NavLink from "next/link";
import styled from "styled-components";
import { useRouter } from 'next/router';


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
    color: #fff;

    transition: 0.4s;
  }
  .hover:hover {
    background-image: -webkit-gradient(
      linear,
      left top,
      right bottom,
      color-stop(1, #d87d4a)
    );
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
  .bk {
    color: #d87d4a;
  }
`;



const NavList = () => {
  const router = useRouter().pathname;
  return (
    <List>
      <li>
        <NavLink href="/">
          <a className={router == '/' ? "hover bk" : "hover"}>HOME</a>
        </NavLink>
      </li>
      <li>
        <NavLink href="/headphone">
          <a className={router == '/headphone' ? "hover bk" : "hover"}>headphone</a>
        </NavLink>
      </li>
      <li>
        <NavLink href="/speakers">
          <a className={router == '/speakers' ? "hover bk" : "hover"}>speakers</a>
        </NavLink>
      </li>
      <li>
        <NavLink href="/earphone">
          <a className={router == '/earphone' ? "hover bk" : "hover"}>earphone</a>
        </NavLink>
      </li>
    </List>
  );
};

export default NavList;
