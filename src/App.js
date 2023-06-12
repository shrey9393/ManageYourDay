import "./App.css";
import Navbar from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { Todos } from "./Components/Todos";
import { useEffect, useState } from "react";
import { AddToDo } from "./Components/AddToDo";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  let initTodo;
  if (localStorage.getItem("task") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("task"));
  }
  const onDelete = (todo) => {
    // console.log("i am delete of", todo);
    // let i = task.indexOf(todo);
    setTask(
      task.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("task", JSON.stringify(task));
  };

  const addTodo = (title, desc) => {
    let sno1;
    if (task.length === 0) {
      sno1 = 0;
    } else {
      sno1 = task[task.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno1,
      title: title,
      desc: desc,
    };
    setTask([...task, myTodo]);
  };

  const [task, setTask] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  return (
    <>
      <Navbar title="My to do list" searchBar={false} />
      <AddToDo addTodo={addTodo} />
      <Todos todo={task} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
