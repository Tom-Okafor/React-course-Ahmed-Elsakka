import React from "react";
import PropTypes from "prop-types";

const TaskInputForm = ({ updateFormText, updateInputValue, inputValue }) => {
  return (
    <form
      onSubmit={function (event) {
        event.preventDefault();
        updateFormText();
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

TaskInputForm.propTypes = {
  updateFormText: PropTypes.func,
  updateInputValue: PropTypes.func,
  inputValue: PropTypes.string,
};

export default TaskInputForm;
