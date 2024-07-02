import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../actions/taskActions";

/**
 * The TaskInput component is a form that allows users to add tasks.
 * It uses the addTask action to add a task to the store.
 */

const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  /**
   * Dispatches the addTask action with the task text.
   * @param {Event} e - The submit event object.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTask({ id: Date.now(), text: task }));
      setTask("");
    }
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="form-inline d-flex justify-content-between"
    >
      <input
        type="text"
        className="form-control mr-2 flex-grow-1"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button type="submit" className="btn btn-primary p-1">
        Add Task
      </button>
    </form>
  );
};

export default TaskInput;
