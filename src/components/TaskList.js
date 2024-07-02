/**
 * The TaskList component returns a list of tasks.
 * Each task is displayed with its text, edit button, complete button, and delete button.
 * The edit button allows users to edit the task text.
 * The complete button allows users to mark the task as completed.
 * The delete button allows users to delete the task.
 *
 */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, editTask, toggleTask } from "../actions/taskActions";
import TaskInput from "./TaskInput";


const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    /*
    The handleDelete function deletes the task with the specified id.
    The deleteTask action is dispatched with the task id.
    */
    dispatch(deleteTask(id));
  };

  const handleEdit = (id) => {
    /*
    The handleEdit function prompts the user to enter new text for the task.
    If the user enters new text, the editTask action is dispatched with the task id and new text.
    If the user cancels the prompt, the function returns without dispatching the action.
    If the user enters an empty text, an alert is displayed.
    */
    let text = prompt("Enter new text");
    if (text === null) {
      return;
    }
    if (text.trim()) {
      dispatch(editTask({ id: id, text: text.trim() }));
    } else {
      alert("Text cannot be empty");
    }
  };

  const handleToggle = (id) => {
    /*
    The handleToggle function toggles the completion status of the task with the specified id.
    The toggleTask action is dispatched with the task id.
    */
    dispatch(toggleTask(id));
  };

  return (
    
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Task</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="2">
            <TaskInput />
          </td>
        </tr>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                width: "50%",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.text}
              </span>
            </td>
            <td>
              
              <button
                className="btn btn-primary p-1"
                onClick={() => handleEdit(task.id)}
                disabled={task.completed}
                style={{
                  backgroundColor: task.completed ? "grey" : "rgb(13,110,253)",
                }}
              >
                Edit
              </button>
              
              <button
                className={
                  task.completed ? "btn btn-success p-1" : "btn btn-primary p-1"
                }
                onClick={() => handleToggle(task.id)}
              >
                {task.completed ? "Completed" : "Complete"}
              </button>
              
              <button
                className="btn btn-primary p-1"
                onClick={() => handleDelete(task.id)}
              >
                Delete
              </button>
              
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;
