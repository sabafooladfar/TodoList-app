import { useEffect, useRef, useState } from "react";

const TodoForm = (props) => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const [input, setInput] = useState(props.edit ? props.edit.text : "");
  const changeHandler = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("enter todo !");
      return;
    }
    props.addTodoHandler(input);
    setInput("");
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={input}
        onChange={changeHandler}
        placeholder={props.edit ? "update todo ... " : "add todo ..."}
        ref={inputRef}
      />
      <button type="submit">{props.edit ? "Update" : "Add"}</button>
    </form>
  );
};

export default TodoForm;
