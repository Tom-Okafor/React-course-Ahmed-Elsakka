import React from "react";
import PropTypes from "prop-types";

const TaskLists = ({ taskList, markTaskCompleted }) => {
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
              onChange={() => {
                markTaskCompleted(i);
              }}
            />
            {task.text}
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
};

export default TaskLists;
