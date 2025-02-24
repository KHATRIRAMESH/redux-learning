import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/features/todo/todoSlice";
const AddTodo = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form onSubmit={addTodoHandler}>
      <input
        type="text"
        placeholder="Enter a todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};
export default AddTodo;
