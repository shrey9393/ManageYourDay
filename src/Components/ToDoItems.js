import React from "react";
export const ToDoItems = (props) => {
  return (
    <>
      <div className="container my-4">
        <h4>{props.todo.title}</h4>
        <p>{props.todo.desc}</p>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => props.onDelete(props.todo)}
        >
          Delete
        </button>
      </div>
    </>
  );
};
