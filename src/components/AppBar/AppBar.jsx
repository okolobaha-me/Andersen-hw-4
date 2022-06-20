import { Header, Nav, NavigationLink, NavItem } from './AppBar.styled';
import PropTypes from 'prop-types';
import { UserMenu } from '../UserMenu/UserMenu';
import { LogInMenu } from '../LogInMenu/LogInMenu';

export const AppBar = ({ isLoggedIn, logOut, avatar, userName, openModal }) => {
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

      {isLoggedIn ? (
        <UserMenu
          logOut={logOut}
          avatar={avatar}
          userName={userName}
          openModal={openModal}
        />
      ) : (
        <LogInMenu openModal={openModal} />
      )}
    </Header>
  );
};

AppBar.propTypes = {
  avatar: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  logIn: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
};
