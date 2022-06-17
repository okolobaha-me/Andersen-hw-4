import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  border-bottom: 1px solid #000039;
`;

export const Nav = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li``;

export const NavigationLink = styled(NavLink)`
  display: inline-block;
  padding: 10px;
  text-decoration: none;

  :visited {
    color: inherit;
  }

  &.active {
    color: red;
  }
`;
