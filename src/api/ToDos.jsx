import { useState } from 'react';
import Instance from './Instance';

const ToDos = () => {
  const { authInstance } = Instance();
  const [todos, setTodos] = useState();

  const createTodo = async (todo, callback) => {
    try {
      await authInstance.post('todos', todo);
      if (callback) {
        callback();
      }
    } catch (error) {
      console.error('postError', error);
    }
  };

  const getTodo = async () => {
    try {
      const res = await authInstance.get('todos');
      setTodos(res.data);
      return res.data;
    } catch (error) {
      console.error('getError', error);
    }
  };

  return { createTodo, getTodo, todos };
};

export default ToDos;
