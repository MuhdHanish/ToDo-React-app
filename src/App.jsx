import "./App.css";
import React, { useState } from "react";

function App() {
  const dayList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {dayList[new Date().getDay()]} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          type="text"
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          placeholder="🖊️ Add item..."
        />
        <i
          className="fas fa-plus"
          onClick={() => setToDos([...toDos,{id:Date.now(),text:toDo,status:false}])}
        ></i>
      </div>
      <div className="todos">
        {toDos.map((todo) => {
          return (
            <div className="todo">
              <div className="left">
                <input type="checkbox"  name="" id="" />
                <p>{todo.text}</p>
              </div>
              <div className="right">
                <i className="fas fa-times"></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
