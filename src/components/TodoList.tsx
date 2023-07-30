import React, { useState, useEffect } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import TodoItem from './TodoItem';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function TodoList() {
  const [newTodoText, setNewTodoText] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = () => {
    if (newTodoText.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now(),
        text: newTodoText,
        completed: false,
      }
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setNewTodoText('')
    }
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAddTodo();
    }
  }

  const handleToggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const handleRemoveTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="rounded-lg w-[22rem] h-[22rem] overflow-auto px-3 py-2 shadow-inner bg-gradient-to-r from-gray-800 to-zinc-900 outline outline-white outline-1">
      <div className="flex justify-center items-center">
        <div className="flex-1 text-center text-3xl font-bold">To do list</div>
      </div>

      <input type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        onKeyPress={handleKeyPress}
        className="w-full rounded px-2 py-1 text-xl text-black outline-none"
        placeholder="Enter your task..."
      />

      <div className="mt-2 space-y-2">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onToggle={() => handleToggleTodo(todo.id)}
            onRemove={() => handleRemoveTodo(todo.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
