import Todo from "./Todo";

const TodoList = ({ todos, onComplete, onDelete }) => {
  if (todos.length === 0) {
    return <p>add some todo</p>;
  } else {
    return <Todo todos={todos} onComplete={onComplete} onDelete={onDelete}/>;
  }
};

export default TodoList;
