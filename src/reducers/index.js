/**
 * Root reducer that combines all the reducers.
 * @module reducers/index
 */

import { combineReducers } from "redux";
import tasksReducer from "./tasksReducer";

/**
 * Root reducer function that combines all the reducers.
 * @function
 * @returns {Object} The combined state object.
 */
export default combineReducers({
  tasks: tasksReducer,
});
