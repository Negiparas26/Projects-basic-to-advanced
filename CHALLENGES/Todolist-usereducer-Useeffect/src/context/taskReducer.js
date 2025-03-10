export const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

export const taskReducer = (state, action) => {
  let updatedTasks;
  switch (action.type) {
    case "ADD_TASK":
      updatedTasks = [...state, { id: Date.now(), text: action.payload, completed: false }];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;

    case "TOGGLE_TASK":
      updatedTasks = state.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;

    case "DELETE_TASK":
      updatedTasks = state.filter(task => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;

    case "EDIT_TASK":
      updatedTasks = state.map(task =>
        task.id === action.payload.id ? { ...task, text: action.payload.newText } : task
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;

    default:
      return state;
  }
};
