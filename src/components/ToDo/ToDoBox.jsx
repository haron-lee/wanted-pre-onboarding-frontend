import React, { useState, useEffect } from 'react';
import ToDoInput from './ToDoInput';
import NewToDo from './NewToDo';
import ToDos from '../../api/ToDos';
import ToDoSkeleton from './ToDoSkeleton';
import { styled } from 'styled-components';

const ToDoBox = () => {
  const { getTodo } = ToDos();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const todos = await getTodo();
      setData(todos);
      setIsLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sortedData = data?.slice().sort((a, b) => {
    if (a.isCompleted === b.isCompleted) {
      return 0;
    } else if (a.isCompleted && !b.isCompleted) {
      return 1;
    } else {
      return -1;
    }
  });

  const reloadData = async () => {
    const todos = await getTodo();
    setData(todos);
  };

  return isLoading ? (
    <ToDoSkeleton />
  ) : (
    <main>
      <ToDoInput onAdded={reloadData} />
      <ToDoList>
        {sortedData?.map((todo) => (
          <NewToDo key={todo.id} todo={todo} onAdded={reloadData} />
        ))}
      </ToDoList>
    </main>
  );
};

export default ToDoBox;

const ToDoList = styled.ul`
  max-height: 415px;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: 3px;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: var(--primary); /* 스크롤바의 색상 */
    border-radius: 10px;
  }
`;
