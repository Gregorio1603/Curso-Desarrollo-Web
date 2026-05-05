import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../features/tasks/tasksSlice";

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <table>
      <thead>
        <tr>
          <th>NOMBRE</th>
          <th>FECHA DE ENTREGA</th>
          <th>ESTADO</th>
          <th>ACCIÓN</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.title}</td>
            <td>{task.deadline}</td>
            <td>
              <span className="status">Pendiente</span>
            </td>
            <td>
              <button
                className="delete-btn"
                onClick={() => dispatch(removeTask(task.id))}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TaskList;