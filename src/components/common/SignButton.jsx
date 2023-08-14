import React from 'react';
import { css, styled } from 'styled-components';

const SignButton = ({ type, children, signupBtn, ...rest }) => {
  return (
    <Button
      type={type ? type : 'button'}
      data-testid={signupBtn ? 'signup-button' : 'signin-button'}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default SignButton;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  color: white;
  background-color: var(--primary);
  box-sizing: border-box;

  ${(props) =>
    props.disabled &&
    css`
      cursor: default;
      background-color: var(--secondary);
      color: #636777;
    `}
`;
