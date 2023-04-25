import { useState,useEffect } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = ({ todos, onComplete, onDelete, onUpdate }) => {
  const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });
  
  const submitTodo = (newValue) => {
    onUpdate(edit.id, newValue);
    setEdit({ id: null, text: "" });
  };
  


  const renderTodos = () => {
    if (todos.length === 0) {
      return <p>add some todo</p>;
    }
    return todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          onComplete={() => onComplete(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onEdit={() => setEdit(todo)}
        />
      );
    });
  };

 
  
  return (
    <div>
      {edit.id ? (
        <TodoForm addTodoHandler={submitTodo} edit={edit} />
      ) : (
        renderTodos()
      )}
    </div>
  );
};

export default TodoList;
