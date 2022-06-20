import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  font-size: 0.875rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: rgb(205, 210, 215);
  background: rgb(26, 32, 39) none repeat scroll;
  border: 1px solid rgb(45, 56, 67);
  border-radius: 8px;
  padding: 12px;
  resize: none;
  margin-bottom: 10px;

  :focus {
    outline: rgb(0, 114, 229) solid 3px;
  }
`;

export const FieldName = styled.span`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  margin-bottom: 4px;
`;
