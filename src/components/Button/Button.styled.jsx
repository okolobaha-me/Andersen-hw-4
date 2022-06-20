import styled from '@emotion/styled';

export const Btn = styled.button`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: rgb(0, 127, 255);
  padding: 12px 24px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease 0s;
  cursor: pointer;
  border: medium none;
  display: block;

  :focus,
  :hover {
    background-color: rgb(0, 114, 229);
  }

  :disabled {
    background-color: #6b829e;
  }
`;
