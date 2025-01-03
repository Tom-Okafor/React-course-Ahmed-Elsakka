import React, { useContext } from "react";
import { TaskContext } from "./TaskContext";

const TaskLists = () => {
  const { state, dispatch } = useContext(TaskContext);
  const { tasks } = state;
  return tasks.length ? (
    <ul>
      {tasks.map((task, i) => {
        return (
          <li key={i} id={i}>
            <input
              type="checkbox"
              name={task.text}
              id={i}
              checked={task.isTaskCompleted}
              onChange={() => {
                dispatch({ type: "Toggle Task", payload: i });
              }}
            />
            <span
              style={{
                textDecoration: task.isTaskCompleted && "line-through",
              }}
            >
              {task.text}
            </span>
            <button
              onClick={() => {
                dispatch({ type: "Delete Task", payload: i });
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  ) : (
    <h2>No tasks yet!</h2>
  );
};

export default TaskLists;
