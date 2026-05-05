import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./features/tasks/tasksSlice";
import TaskList from "./components/TaskList";

function App() {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (title && deadline) {
      dispatch({
        type: "tasks/addTask",
        payload: {
          id: Date.now(),
          title,
          deadline,
        },
      });
      setTitle("");
      setDeadline("");
    }
  };

  return (
    <div className="app-container">
      <h1>Tareas</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Nombre de la tarea"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />

        <button onClick={handleAddTask}>Agregar</button>
      </div>

      <TaskList />
    </div>
  );
}

export default App;
