import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const Signout = () => {
  const navigate = useNavigate();

  const handleSignout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <SignoutBtn type='button' onClick={handleSignout}>
      로그아웃
    </SignoutBtn>
  );
};

export default Signout;

const SignoutBtn = styled.button`
  position: fixed;
  top: 30px;
  right: 30px;
  display: block;
  width: 120px;
  padding: 15px;
  border-radius: 10px;
  color: white;
  background-color: var(--gray-800);
  font-size: 18px;

  &:hover {
    background-color: #f6b132;
  }
`;
