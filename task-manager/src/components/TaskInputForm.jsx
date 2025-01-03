import React, { useState, useContext } from "react";
import { TaskContext } from "./TaskContext";
const TaskInputForm = () => {
  const { dispatch } = useContext(TaskContext);
  const [inputValue, setInputValue] = useState("");
  function updateInputValue(event) {
    setInputValue(event.target.value);
  }
  return (
    <form
      onSubmit={function (event) {
        event.preventDefault();
        dispatch({ type: "Add Task", payload: inputValue });
        setInputValue("")
      }}
    >
      <input
        type="text"
        placeholder="Please input your new task."
        onChange={updateInputValue}
        value={inputValue}
      />
      <input type="submit" value="Add task!" />
    </form>
  );
};

export default TaskInputForm;
