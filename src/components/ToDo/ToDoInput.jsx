import React, { useState } from 'react';
import { styled, css } from 'styled-components';
import ToDos from '../../api/ToDos';

const ToDoInput = ({ onAdded }) => {
  const [todo, setTodo] = useState({ todo: '' });
  const { createTodo } = ToDos();
  const [isComposition, setIsComposition] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTodo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddClick = () => {
    setTodo({ todo: '' });
    createTodo(todo, () => {
      onAdded();
    });
  };

  const handleComposition = (event) => {
    if (event.type === 'compositionstart') {
      setIsComposition(true);
    } else if (event.type === 'compositionend') {
      setIsComposition(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !isComposition) {
      event.preventDefault();
      handleAddClick();
    }
  };

  return (
    <ToDoLayout>
      <label className='blind' htmlFor='todo-input'>
        할일 입력창
      </label>
      <NewToDo
        type='text'
        name='todo'
        id='todo-input'
        data-testid='new-todo-input'
        autoFocus
        placeholder='새로운 할일을 입력해주세요'
        value={todo.todo}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onCompositionStart={handleComposition}
        onCompositionEnd={handleComposition}
      />
      <ToDoAddBtn onClick={handleAddClick}>추가</ToDoAddBtn>
    </ToDoLayout>
  );
};

const ToDoAddBtn = ({ onClick }) => {
  return (
    <AddBtn type='button' data-testid='new-todo-add-button' onClick={onClick}>
      추가
    </AddBtn>
  );
};

export default ToDoInput;

const ToDoLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const NewToDo = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  color: var(--white);
  background-color: var(--bg);
  border-bottom: 1px solid var(--gray-500);
  box-sizing: border-box;

  &::placeholder {
    font-size: 11px;
    color: var(--gray-800);
  }
`;

const AddBtn = styled.button`
  padding: 10px 20px;
  color: var(--white);
  background-color: var(--primary);
  border-radius: 20px;
  flex-shrink: 0;

  ${(props) =>
    props.disabled &&
    css`
      background-color: var(--disabled);
      cursor: default;
    `}
`;
