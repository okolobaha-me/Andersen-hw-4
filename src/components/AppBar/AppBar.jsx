import { Header, Nav, NavigationLink, NavItem } from './AppBar.styled';
import { logIn } from '../../JS/API';

export const AppBar = () => {
  return (
    <Header>
      <Nav>
        <NavItem>
          <NavigationLink to={'/'}>Home</NavigationLink>
        </NavItem>
        <NavItem>
          <NavigationLink to={'/about-us'}>About us</NavigationLink>
        </NavItem>
      </Nav>

      <button onClick={logIn}>click</button>
    </Header>
  );
};
