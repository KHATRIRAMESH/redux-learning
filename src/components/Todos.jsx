import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../redux/features/todo/todoSlice";
import "../App.css";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todos);
  return (
    <>
      <div>Todos: </div>
      <table>
        <caption>TODO List for Developer</caption>
        <thead>
          <tr>
            <th scope="col">ID:</th>
            <th scope="col">TODO:</th>
            <th scope="col">Status:</th>
            <th scope="col">Action:</th>
          </tr>
        </thead>
        {todos.map((todo) => (
          <tbody key={todo.id}>
            <tr>
              <th>{todo.id}</th>
              <td>{todo.text}</td>
              <td>{todo.completed ? "Completed" : "Pending"}</td>
              <td>
                <button onClick={() => dispatch(removeTodo(todo.id))}>
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
};
export default Todos;
