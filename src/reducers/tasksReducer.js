const initialState = {
  tasks: [],
};

const tasksReducer = (state = initialState, action) => {
  /*
  The tasksReducer function takes two parameters: state and action.
  The state parameter is initialized with the initialState object.
  The action parameter is an object that contains a type and a payload.
  The tasksReducer function returns a new state based on the action type.
  */
  switch (action.type) {
    case "ADD_TASK":
      return {
        /*
        The ADD_TASK case returns a new state with the tasks array containing the new task.
        The new task is added to the tasks array using the spread operator.
        */
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "DELETE_TASK":
      return {
        /*
        The DELETE_TASK case returns a new state with the tasks array filtered to remove the task with the specified id.
        The task with the specified id is removed from the tasks array using the filter method.
        */
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "TOGGLE_TASK":
      return {
        /*
        The TOGGLE_TASK case returns a new state with the tasks array updated to toggle the completed property of the task with the specified id.
        The completed property of the task with the specified id is toggled using the map method.
        */
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case "EDIT_TASK":
      return {
        /*
        The EDIT_TASK case returns a new state with the tasks array updated to change the text property of the task with the specified id.
        The text property of the task with the specified id is changed using the map method.
        */
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, text: action.payload.text }
            : task
        ),
      };

    default:
      return state;
  }
};

export default tasksReducer;
