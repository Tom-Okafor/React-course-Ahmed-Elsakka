import React from "react";
import PropTypes from "prop-types";

const TaskLists = ({ taskList, markTaskCompleted, deleteTask }) => {
  return taskList.length ? (
    <ul>
      {taskList.map((task, i) => {
        return (
          <li
            key={i}
            id={i}
            style={{
              textDecoration: task.checked && "line-through",
            }}
          >
            <input
              type="checkbox"
              name={task.text}
              id={i}
              checked={task.checked}
              onChange={() => {
                markTaskCompleted(i);
              }}
            />
            {task.text}
            <button
              onClick={() => {
                deleteTask(i);
              }}
            >
              delete task
            </button>
          </li>
        );
      })}
    </ul>
  ) : (
    <h2>No tasks yet!</h2>
  );
};

TaskLists.propTypes = {
  taskList: PropTypes.array,
  markTaskCompleted: PropTypes.func,
  deleteTask: PropTypes.func,
};

export default TaskLists;
