import React from "react";
import { ToDoItems } from "./ToDoItems";
export const Todos = (props) => {
  return (
    <div className="container my-3">
      <h2 className="my-3">ToDo List</h2>
      {props.todo.length === 0
        ? "No TODOs to display"
        : props.todo.map((contentsOfTodo) => {
            return (
              <>
                <ToDoItems
                  todo={contentsOfTodo}
                  key={contentsOfTodo.sno}
                  onDelete={props.onDelete}
                />
                <hr />
              </>
            );
          })}
    </div>
  );
};
