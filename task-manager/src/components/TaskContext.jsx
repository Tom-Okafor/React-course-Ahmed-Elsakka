import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import { initialState, TaskReducer } from "./TaskReducer";

const TaskContext = createContext();

function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(TaskReducer, initialState);
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

TaskProvider.propTypes = {
  children: PropTypes.element,
};
export { TaskContext, TaskProvider };
