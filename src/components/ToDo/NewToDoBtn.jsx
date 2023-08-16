import React from 'react';
import { styled } from 'styled-components';

const NewToDoBtn = ({ type, children, test, onClick, ...props }) => {
  return (
    <BtnStyle
      type={type ? type : 'button'}
      data-testid={test}
      onClick={onClick}
      {...props}
    >
      {children}
    </BtnStyle>
  );
};

export default NewToDoBtn;

const BtnStyle = styled.button`
  color: var(--gray-800);
  margin-right: 10px;
  font-size: 14px;

  &:hover {
    color: ${(props) => (props.$delete ? 'var(--delete)' : 'var(--primary)')};
  }
`;
