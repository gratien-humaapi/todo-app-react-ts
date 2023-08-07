//import "./styles.css"
import React, { useMemo, useState } from "react";
// import { useState } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./navbar/navbar";
import CustomButton from "./components/button";
import { Todo } from "./type";

export default function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<Todo[]>([]);

  function onTaskCreate(value: Todo) {
    setTodos([...todos, value]);
  }

  return (
    <div style={{ display: "flex", width:"100%" ,height:"100vh"}}>
      <Navbar onTaskCreate={onTaskCreate} />
      <div id="main" style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h2>Tasks</h2>
          <div style={{ display: "flex" }}>
            <CustomButton title="All(4)" marginRight="8px" onClick={() => {}} />
            <CustomButton
              title="Completed(2)"
              backgroundColor="#fff"
              color="#505050"
              marginRight="8px"
              onClick={() => {}}
            />
            <CustomButton
              title="Pending(2)"
              backgroundColor="#fff"
              color="#505050"
              onClick={() => {}}
            />
          </div>
        </div>
        <div style={{width:"100%", }}>
          <div style={{display:'grid',width:"100%", gridTemplateColumns:"auto auto auto"}}>
            {todos.map((todo) => (
              <div
                style={{
                  border: `1px solid ${todo.color?? "none"}`,
                  width: "320px",
                  height: "158px",
                  borderRadius: "20px",
                  padding: "14px",
                  backgroundColor:"white",
                  margin:'0px 8px 8px 0px'
                  
                }}
              >
                <div></div>
               <h3>{todo.name}</h3>
               <p>{todo.startTime} - {todo.endTime}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
