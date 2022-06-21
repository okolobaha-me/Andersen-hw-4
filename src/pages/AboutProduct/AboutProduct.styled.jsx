import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Product = styled.div`
  padding-top: 15px;
  display: flex;
  gap: 30px;
`;
export const TempImage = styled.img``;

export const Image = styled.img`
  ${props => {
    if (props.isLoading)
      return css`
        display: none;
      `;
  }}
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.49);
`;

export const DataWrapper = styled.div``;

export const Title = styled.h1``;

export const Price = styled.p``;

export const Description = styled.p``;

export const QuantitySelector = styled.input`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: rgb(0, 127, 255);
  padding: 12px 12px;
  border-radius: 8px;
  color: white;
  border: 1px solid rgb(0, 127, 255);
  width: 60px;
`;

export const CartOptions = styled.div`
  gap: 15px;
  display: flex;
`;
