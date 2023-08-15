import React, { useState, useEffect } from 'react';
import ToDoInput from './ToDoInput';
import NewToDo from './NewToDo';
import ToDos from '../../api/ToDos';
import ToDoSkeleton from './ToDoSkeleton';

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
  }, []);

  const reloadData = async () => {
    const todos = await getTodo();
    setData(todos);
  };

  return isLoading ? (
    <ToDoSkeleton />
  ) : (
    <main>
      <ToDoInput onAdded={reloadData} />
      <ul>
        {data?.map((todo) => (
          <NewToDo
            key={todo.id}
            text={todo.todo}
            isCompleted={todo.isCompleted}
          />
        ))}
      </ul>
    </main>
  );
};

export default ToDoBox;
