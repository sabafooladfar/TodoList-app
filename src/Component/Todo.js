import { FaTrash } from "react-icons/fa";
import { AiFillEdit,AiOutlineCheckCircle } from "react-icons/ai";

const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    <div className="todoItem">
      <div className={todo.isCompleted ? "completed" : null}>{todo.text}</div>
      <span className="editBtn" onClick={onEdit}><AiFillEdit/></span>
      <span className="checkBtn" onClick={onComplete}><AiOutlineCheckCircle/></span>
      <span className="dltBtn" onClick={onDelete}>
        <FaTrash />
      </span>
    </div>
  );
};

export default Todo;
