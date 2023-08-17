import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const SLink = styled(Link)`
  display: block;
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  color: white;
  background-color: var(--gray-800);
  box-sizing: border-box;

  &:hover {
    background-color: var(--primary);
  }
`;

export const Title = styled.h1`
  display: block;
  margin-bottom: 30px;
  font-size: 26px;
  color: var(--white);
  text-align: center;
`;

export const ErrorMSG = styled.p`
  color: var(--delete);
  font-size: 12px;
  margin-left: 10px;
  margin-bottom: 20px;
`;
