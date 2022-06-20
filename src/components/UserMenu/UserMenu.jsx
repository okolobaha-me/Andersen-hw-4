import PropTypes from 'prop-types';
import { Avatar, AvatarWrapper } from './UserMenu.styled';
import { Button } from '../Button/Button';
import { MenuWrapper } from '../BaseStyles.styled';
import { Cart } from '../Cart/Cart';

export const UserMenu = ({ logOut, userName, avatar, cart }) => {
  return (
    <MenuWrapper>
      <span>{userName}</span>
      <AvatarWrapper>
        <Avatar src={avatar} alt={userName} />
      </AvatarWrapper>
      <Cart cart={cart} />
      <Button onClick={logOut} text={'Log out'} />
    </MenuWrapper>
  );
};

UserMenu.propTypes = {
  avatar: PropTypes.string.isRequired,
  cart: PropTypes.object.isRequired,
  logOut: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
};
