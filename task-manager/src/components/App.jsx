import React from "react";
import TaskInputForm from "./TaskInputForm";
import TaskLists from "./TaskLists";
import "../App.css";
import { TaskProvider } from "./TaskContext";

export default function App() {
  return (
    <>
      <TaskProvider>
        <h1>TASK MANAGER</h1>
        <TaskInputForm />
        <TaskLists />
      </TaskProvider>
    </>
  );
}
