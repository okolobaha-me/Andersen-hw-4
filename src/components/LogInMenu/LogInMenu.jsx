import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import { MenuWrapper } from '../BaseStyles.styled';

export const LogInMenu = ({ openModal }) => {
  const handleClick = e => {
    const type = e.target.id;
    openModal(type);
  };

  return (
    <MenuWrapper>
      <Button onClick={handleClick} text={'Sign up'} id={'register'} />
      <Button onClick={handleClick} text={'log in'} id={'logIn'} />
    </MenuWrapper>
  );
};

LogInMenu.propTypes = {
  openModal: PropTypes.func.isRequired,
};
