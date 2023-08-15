import React, { useState } from 'react';
import { styled } from 'styled-components';

const NewToDo = ({ text }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <NewToDOLayout $isChecked={isChecked}>
      <CheckBox $isChecked={isChecked}>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <Checkmark $isChecked={isChecked} />
        <span>{text}</span>
      </CheckBox>
    </NewToDOLayout>
  );
};

export default NewToDo;

const NewToDOLayout = styled.li`
  margin-top: 15px;
  color: var(--white);
`;

const CheckBox = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;

  span {
    margin-left: 15px;
    font-size: 18px;
    color: ${(props) =>
      props.$isChecked ? 'var(--gray-800)' : 'var(--white)'};
    text-decoration: ${(props) => (props.$isChecked ? 'line-through' : 'none')};
  }
`;

const Checkmark = styled.div`
  position: absolute;
  width: 13px;
  height: 13px;
  background-color: ${(props) =>
    props.$isChecked ? 'var(--white)' : 'var(--gray-500)'};
  border-radius: 50%;
  transition: background-color 0.3s ease-in-out;
  left: 0;
  top: 0;

  &:before {
    content: '';
    display: ${(props) => (props.$isChecked ? 'block' : 'none')};
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: var(--primary);
    border-radius: 50%;
    left: 1.5px;
    top: 1.5px;
  }
`;
