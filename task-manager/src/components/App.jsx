import React, { useState } from "react";
import TaskInputForm from "./TaskInputForm";
import TaskLists from "./TaskLists";

export default function App() {
  const [formDetails, setFormDetails] = useState({
    inputValue: "",
    formText: [],
  });
  const { inputValue, formText } = formDetails;

  function updateInputValue(event) {
    setFormDetails((prevDetails) => {
      return { ...prevDetails, inputValue: event.target.value };
    });
  }

  function updateFormText() {
    setFormDetails((prevDetails) => {
      return {
        ...prevDetails,
        formText: [...formText, { text: inputValue, checked: false }],
      };
    });
    setFormDetails((prevDetails) => {
      return { ...prevDetails, inputValue: "" };
    });
  }
  function markTaskCompleted(i) {
    setFormDetails((prevDetails) => {
      prevDetails.formText[i].checked = true;
      return { ...prevDetails };
    });
  }

  return (
    <>
      <h1>TASK MANAGER</h1>
      <TaskInputForm
        updateFormText={updateFormText}
        updateInputValue={updateInputValue}
        inputValue={inputValue}
      />
      <TaskLists taskList={formText} markTaskCompleted={markTaskCompleted} />
    </>
  );
}
