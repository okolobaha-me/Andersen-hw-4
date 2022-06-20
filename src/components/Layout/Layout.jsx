import { Outlet } from 'react-router';
import { AppBar } from '../AppBar/AppBar';
import PropTypes from 'prop-types';

export const Layout = ({
  isLoggedIn,
  logIn,
  logOut,
  userName,
  avatar,
  openModal,
  cart,
}) => {
  return (
    <>
      <AppBar
        isLoggedIn={isLoggedIn}
        logIn={logIn}
        logOut={logOut}
        userName={userName}
        avatar={avatar}
        openModal={openModal}
        cart={cart}
      />
      <Outlet />
    </>
  );
};

Layout.propTypes = {
  avatar: PropTypes.string.isRequired,
  cart: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  logIn: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
};
