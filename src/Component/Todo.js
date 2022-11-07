const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    <div className="todoItem">
      <div className={todo.isCompleted ? "completed" : null}>{todo.text}</div>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onComplete}>Complete</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Todo;
