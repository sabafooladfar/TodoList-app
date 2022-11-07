import { useState } from "react";
import "../App.css";
import NavBar from "./NavBar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const onComplete = (id) => {
    console.log(id);
    const index = todos.findIndex((item) => item.id == id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };
  const onDelete = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };
  const updateTodo = (id, newValue) => {
    const index = todos.findIndex((item) => item.id == id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  return (
    <div>
      <NavBar unCompletedTodos={todos.filter((t) => !t.isCompleted).length} />
      <div className="container">
        <TodoForm addTodoHandler={addTodo} />
        <TodoList
          todos={todos}
          onComplete={onComplete}
          onDelete={onDelete}
          onUpdate={updateTodo}
        />
      </div>
    </div>
  );
};

export default TodoApp;
