const Todo = ({ todos, onComplete, onDelete }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id} className="todoItem">
            <div className={todo.isComplete ? "completed" : null}>
              {todo.text}
            </div>
            <button>Edit</button>
            <button onClick={() => onComplete(todo.id)}>Complete</button>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
