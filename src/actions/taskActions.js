

/**
 * Action creator function that adds a task.
 *
 * @param {Object} task - The task object to be added.
 * @returns {Object} An action object with the type "ADD_TASK" and the task payload.
 */
export const addTask = (task) => ({
  type: "ADD_TASK",
  payload: task,
});

/**
 * Action creator function that deletes a task.
 *
 * @param {string} taskId - The ID of the task to be deleted.
 * @returns {Object} An action object with the type "DELETE_TASK" and the taskId payload.
 */
export const deleteTask = (taskId) => ({
  type: "DELETE_TASK",
  payload: taskId,
});

/**
 * Action creator function that toggles the completion status of a task.
 *
 * @param {string} taskId - The ID of the task to be toggled.
 * @returns {Object} An action object with the type "TOGGLE_TASK" and the taskId payload.
 */
export const toggleTask = (taskId) => ({
  type: "TOGGLE_TASK",
  payload: taskId,
});

/**
 * Action creator function that edits a task.
 *
 * @param {Object} task - The updated task object.
 * @returns {Object} An action object with the type "EDIT_TASK" and the task payload.
 */
export const editTask = (task) => ({
  type: "EDIT_TASK",
  payload: task,
});
