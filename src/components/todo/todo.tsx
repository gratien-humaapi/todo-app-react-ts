import { ChangeEvent, useState } from "react";
import { Todo } from "../../type";
import Popup from "../popup/popup";
import "./todo.css";

interface TodoCardProps {
  todo: Todo;
  onCompleted: (value: boolean, id: string) => void;
  editTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export default function TodoCard(props: TodoCardProps) {
  const { todo, onCompleted, editTodo, deleteTodo } = props;

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.checked);
    onCompleted(event.target.checked, todo.id);
  };

  return (
    <div
      className="todo-card"
      style={{
        border: `1px solid ${todo.color.trim()==="" ? "white": todo.color}`,
      }}
    >
      <div className="todo-card-header">
        <input
          className="todo-card-checkbox"
          type="checkbox"
          checked={todo.isChecked}
          onChange={handleCheckboxChange}
        />
        <Popup todo={todo} editTodo={editTodo} deleteTodo={deleteTodo} />
      </div>
      <h3>{todo.title}</h3>
      <p>
        {todo.startTime} - {todo.endTime}
      </p>
    </div>
  );
}
