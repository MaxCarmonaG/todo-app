import { useState } from 'react';

const INITIAL_STATE = [
  {
    id: 1,
    text: 'buy flowers',
    done: false
  },
  {
    id: 2,
    text: 'Go shopping',
    done: false
  },
  {
    id: 3,
    text: 'learn react',
    done: false
  }
];

const useTodos = () => {
  const [todos, setTodos] = useState(INITIAL_STATE);
  const [inputVal, setInputVal] = useState('');
  const addTodo = (todo) => {
    todo.id = Date.now();
    setTodos([...todos, todo]);
    setInputVal('');
  };
  const toggleTodo = (id) => {
    const newTodos = todos.map(
      todo => id === todo.id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  };

  return {
    todos,
    addTodo,
    inputVal,
    setInputVal,
    toggleTodo
  };
}

export default useTodos;