import React, { useState } from 'react';
import { styled } from 'styled-components';
import ToDos from '../../api/ToDos';
import NewToDoBtn from './NewToDoBtn';

const NewToDo = ({ todo, onAdded }) => {
  const [isChecked, setIsChecked] = useState(todo.isCompleted);
  const [newTodo, setNewTodo] = useState(todo.todo);
  const { updateTodo, deleteTodo } = ToDos();
  const [isModify, setIsModify] = useState(false);

  const handleCheckboxChange = () => {
    const newIsChecked = !isChecked;
    setIsChecked(newIsChecked);
    updateCheckbox(todo.id, todo.todo, newIsChecked);
  };

  const handleNewTodo = (e) => {
    setNewTodo(e.target.value);
  };

  const submitTodo = (e) => {
    setIsModify(false);
    updateCheckbox(todo.id, newTodo, isChecked);
  };

  const handleModifySubmitBtn = (e) => {
    if (e.target.textContent === '수정') {
      setIsModify(true);
    } else {
      submitTodo();
    }
  };

  const handleDeleteTodo = async () => {
    await deleteTodo(todo.id);
    onAdded();
  };

  const updateCheckbox = async (id, todo, newIsChecked) => {
    await updateTodo(id, todo, newIsChecked);
    onAdded();
  };

  return (
    <NewToDOLayout $isChecked={isChecked} $isModify={isModify}>
      {isModify ? (
        <>
          <ModifyLayout
            onSubmit={(e) => {
              e.preventDefault();
              submitTodo();
            }}
          >
            <CheckBox $isChecked={isChecked}>
              <Checkmark $isChecked={isChecked} $isModify={isModify} />
            </CheckBox>
            <input
              type='text'
              data-testid='modify-input'
              checked={isChecked}
              value={newTodo}
              onChange={handleNewTodo}
              autoFocus
            />
          </ModifyLayout>
          <div>
            <NewToDoBtn
              test='submit-button'
              type='submit'
              onClick={handleModifySubmitBtn}
            >
              제출
            </NewToDoBtn>
            <NewToDoBtn test='cancel-button' onClick={() => setIsModify(false)}>
              취소
            </NewToDoBtn>
          </div>
        </>
      ) : (
        <>
          <CheckBox $isChecked={isChecked}>
            <input
              type='checkbox'
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <Checkmark $isChecked={isChecked} />
            <span>{todo.todo}</span>
          </CheckBox>
          <div>
            <NewToDoBtn test='modify-button' onClick={handleModifySubmitBtn}>
              수정
            </NewToDoBtn>
            <NewToDoBtn test='delete-button' onClick={handleDeleteTodo} $delete>
              삭제
            </NewToDoBtn>
          </div>
        </>
      )}
    </NewToDOLayout>
  );
};

export default NewToDo;

const NewToDOLayout = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  color: var(--white);
  padding: 10px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.$isModify ? 'var(--dark-bg)' : 'inherit'};

  &:hover {
    background-color: var(--dark-bg);
  }
`;

const CheckBox = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;

  span {
    margin-left: 15px;
    font-size: 22px;
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
  top: ${(props) => (props.$isModify ? '8px' : '2px')};

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

const ModifyLayout = styled.form`
  input {
    padding-top: 5px;
    padding-left: 10px;
    padding-bottom: 5px;
    color: var(--white);
    margin-left: 20px;
    background-color: var(--dark-bg);
    border-radius: 10px;
    outline: none;
    font-size: 22px;
  }
`;
