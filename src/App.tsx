import "./styles.css";
import React, { ChangeEvent, useEffect, useState } from "react";
import Navbar from "./components/navbar/navbar";
import CustomButton from "./components/button";
import { Todo } from "./type";
import TodoCard from "./components/todo/todo";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodo] = useState(0);
  const [pendingTodos, setPendingTodo] = useState(0);
  const [currentTodo, setCurrentTodo] = useState<Todo>();

  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");

  useEffect(() => {
    console.log(todos);
    setCompletedTodo(todos.filter((todo) => todo.isChecked === true).length);
    setPendingTodo(todos.filter((todo) => todo.isChecked === false).length);
  });

  function onTaskCreate(value: Todo) {
    setTodos([...todos, value]);
    console.log(todos);
  }

  function onCompleted(value: boolean, id: string) {
    const foundsItems = todos.find((todo) => todo.id === id);
    foundsItems!.isChecked = !foundsItems!.isChecked;
    setTodos([...todos]);
    console.log(todos);
  }

  function updateTodo(id: string, value: any) {
    const foundsItems = todos.find((todo) => todo.id === id);
    foundsItems!.title = value.title;
    foundsItems!.color = value.color;
    foundsItems!.startTime = value.startTime;
    foundsItems!.endTime = value.endTime;
    setTodos([...todos]);
    setCurrentTodo(undefined);
    console.log(todos);
  }

  function editTodo(id: string) {
    const foundsItem = todos.find((todo) => todo.id === id);
    setCurrentTodo(foundsItem);
    console.log(currentTodo);
  }

  function deleteTodo(id: string) {
    const items = todos.filter((todo) => todo.id !== id);
    setTodos([...items]);
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") {
      return todo.isChecked;
    } else if (filter === "pending") {
      return !todo.isChecked;
    }
    return true;
  });

  return (
    <div style={{ display: "flex", width: "100%", height: "100vh" }}>
      <Navbar
        onTaskCreate={onTaskCreate}
        updateTodo={updateTodo}
        todo={currentTodo}
      />
      <div className="main">
        <div className="task-list-header">
          <h2>Tasks</h2>
          <div style={{ display: "flex" }}>
            <CustomButton
              title={`All(${todos.length})`}
              backgroundColor={filter === "all" ? null : "#fff"}
              color={filter === "all" ? null : "#505050"}
              marginRight="8px"
              onClick={() => setFilter("all")}
            />
            <CustomButton
              title={`Completed(${completedTodos})`}
              backgroundColor={filter === "completed" ? null : "#fff"}
              color={filter === "completed" ? null : "#505050"}
              marginRight="8px"
              onClick={() => setFilter("completed")}
            />
            <CustomButton
              title={`Pending(${pendingTodos})`}
              backgroundColor={filter === "pending" ? null : "#fff"}
              color={filter === "pending" ? null : "#505050"}
              marginRight="8px"
              onClick={() => setFilter("pending")}
            />
          </div>
        </div>
        <div style={{ marginTop: "15px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "10px",
            }}
          >
            {filteredTodos.map((todo) => (
              <TodoCard
                key={todo.id}
                todo={todo}
                onCompleted={onCompleted}
                editTodo={editTodo}
                deleteTodo={deleteTodo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
