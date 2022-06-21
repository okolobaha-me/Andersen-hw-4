import { Message, StyledLink } from './NotFound.styled';

export const NotFount = () => {
  return (
    <Message>
      Oops, we didn't find this page :( ! Follow the{' '}
      <StyledLink to={'/'}>link</StyledLink> to get to homepage
    </Message>
  );
};
