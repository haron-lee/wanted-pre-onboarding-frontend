import React from 'react';
import { styled } from 'styled-components';

const SignInput = ({ children, type, id, email, ...rest }) => {
  return (
    <>
      <Label htmlFor={id}>{children}</Label>
      <Input
        type={type ? type : 'email'}
        id={id}
        data-testid={email ? 'email-input' : 'password-input'}
        {...rest}
        autoComplete={type === 'password' ? 'off' : 'on'}
      />
    </>
  );
};

export default SignInput;

const Label = styled.label`
  display: block;
  margin-left: 5px;
  margin-bottom: 10px;
  color: var(--gray-400);
  font-size: 13px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  margin-bottom: ${(props) => (props.$checkError ? '10px' : '20px')};
  padding: 10px;
  color: white;
  background-color: var(--dark-bg);
  border-radius: 10px;

  &::placeholder {
    font-size: 11px;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: var(--white);
    -webkit-box-shadow: 0 0 0px 1000px var(--dark-bg) inset;
    box-shadow: 0 0 0px 1000px var(--dark-bg) inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  &:autofill,
  &:autofill:hover,
  &:autofill:focus,
  &:autofill:active {
    -webkit-text-fill-color: var(--white);
    -webkit-box-shadow: 0 0 0px 1000px var(--dark-bg) inset;
    box-shadow: 0 0 0px 1000px var(--dark-bg) inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;
