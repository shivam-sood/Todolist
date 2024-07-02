import { createStore } from "redux";
import rootReducer from "./reducers";

export const loadState = () => {
  /*
  The loadState function retrieves the state from the local storage.
  If the state does not exist, it returns undefined.
  If an error occurs during the retrieval of the state, it returns undefined.
  */

  try {
    const serializedState = localStorage.getItem("tasks");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  /*
  The saveState function saves the state to the local storage.
  If an error occurs during the serialization of the state, it ignores the error.
  */
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("tasks", serializedState);
  } catch (err) {
    // Ignore write errors.
  }
};

const persistedState = loadState();

// Create a Redux store with the persisted state.
const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Subscribe to the store to save the state to the local storage.
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
