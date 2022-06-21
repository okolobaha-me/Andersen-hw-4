import styled from '@emotion/styled';

export const ModalBlock = styled.div`
  padding: 34px 20px 20px 20px;
  background-color: #fff;
  border-radius: 10px;
  position: relative;
`;

export const CloseBtn = styled.button`
  padding: 10px;
  border-radius: 50%;
  border: 1px solid #007fff;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;

  :focus,
  :hover {
    background-color: #007fff;
  }
`;

export const CloseImg = styled.img`
  display: block;
  width: 10px;
  height: 10px;
`;
