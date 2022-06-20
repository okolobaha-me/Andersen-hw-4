import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Card = styled.li`
  overflow: hidden;
  border-radius: 10px;
  padding: 0;
  margin: 0;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.49);
`;

export const Image = styled.img`
  width: 100%;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.49);
`;

export const Title = styled(Link)`
  font-size: 17px;
  margin: 0 0 10px 0;
  text-align: center;
  text-decoration: none;
  color: inherit;
`;

export const ProductDataWrapper = styled.div`
  padding: 10px;
`;

export const Dollar = styled.span`
  color: #009101;
`;
