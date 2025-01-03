export const initialState = {
  tasks: [],
};
export function TaskReducer(state, action) {
  switch (action.type) {
    default:
      return state;
    case "Add Task":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { text: action.payload, isTaskCompleted: false },
        ],
      };
    case "Toggle Task":
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.payload
            ? { text: task.text, isTaskCompleted: !task.isTaskCompleted }
            : task
        ),
      };
    case "Delete Task":
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index !== action.payload),
      };
  }
}
