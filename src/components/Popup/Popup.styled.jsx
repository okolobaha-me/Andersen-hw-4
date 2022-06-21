import styled from '@emotion/styled';

export const PopupStyled = styled.div`
  background-color: #ffcf56;
  padding: 15px 45px 15px 15px;
  position: absolute;
  bottom: 40px;
  right: 40px;
  border-radius: 10px;
  line-height: 1;
`;

export const Message = styled.p`
  text-align: left;
  margin: 0;
  padding: 0;
  line-height: 1.5;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  padding: 5px;
  border-radius: 50%;
  background-color: #ff0202;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const CloseImg = styled.img`
  display: block;
  width: 15px;
  height: 15px;
`;
