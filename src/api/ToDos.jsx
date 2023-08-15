import Instance from './Instance';

const ToDos = () => {
  const { authInstance } = Instance();

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
      return res.data;
    } catch (error) {
      console.error('getError', error);
    }
  };

  const updateTodo = async (id, todo, isChecked) => {
    try {
      const res = await authInstance.put(`todos/${id}`, {
        todo: todo,
        isCompleted: isChecked,
      });
      return res;
    } catch (error) {
      console.error('updateError', error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await authInstance.delete(`todos/${id}`);
    } catch (error) {
      console.error('deleteError', error);
    }
  };

  return { createTodo, getTodo, updateTodo, deleteTodo };
};

export default ToDos;
