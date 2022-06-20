import PropTypes from 'prop-types';
import { Avatar, AvatarWrapper } from './UserMenu.styled';
import { Button } from '../Button/Button';
import { MenuWrapper } from '../BaseStyles.styled';

export const UserMenu = ({ logOut, userName, avatar }) => {
  return (
    <MenuWrapper>
      <span>{userName}</span>
      <AvatarWrapper>
        <Avatar src={avatar} alt={userName} />
      </AvatarWrapper>
      <Button onClick={logOut} text={'Log out'} />
    </MenuWrapper>
  );
};

UserMenu.propTypes = {
  avatar: PropTypes.string.isRequired,
  logOut: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
};
