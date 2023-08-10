import { useEffect, useState } from "react";
import "./navbar.css";
import CustomButton from "../button";
import { IconArrowNarowRight } from "../../icons/icons";
import { Todo, UpdateTodo } from "../../type";

export default function Navbar(props: {
  onTaskCreate: (value: Todo) => void;
  updateTodo: (id: string, value: UpdateTodo) => void;
  todo?: Todo;
}) {
  const { onTaskCreate, updateTodo, todo } = props;
  console.log(todo);

  // alert(todo?.title);
  // const [currentTodo, setCurrentTodo] = useState<Todo>();
  const [title, setTitle] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [isUpdating, setIsUpating] = useState(false);

  useEffect(() => {
    if (todo) {
      console.log("here");
      setTitle(todo!.title);
      setSelectedColor(todo!.color);
      setStartTime(todo!.startTime);
      setEndTime(todo!.endTime);
      setIsUpating(true);
      console.log({ isUpdating });
    }
  }, [isUpdating, todo]);

  const titleChange = (event: any) => {
    setTitle(event.target.value);
    console.log(title);
  };

  function saveColor(color: string) {
    if (selectedColor === color) {
      setSelectedColor("");
    } else {
      setSelectedColor(color);
    }
  }

  function resetInput() {
    setTitle("");
    setStartTime("");
    setEndTime("");
    setSelectedColor("");
    setIsUpating(false);
  }

  function saveTask() {
    onTaskCreate({
      id: Date.now().toString(),
      title: title,
      color: selectedColor,
      startTime: startTime,
      endTime: endTime,
      isChecked: false,
    });
    resetInput();
  }

  function updateTask() {
    updateTodo(todo!.id, {
      title,
      color: selectedColor,
      startTime,
      endTime,
    });
    resetInput();
  }

  const colors = ["#05EB00", "#FFA471", "#DE82FF", "#87C5FF"];

  return (
    <div id="navbar">
      <div id="top">
        <label>Task title</label>
        <textarea value={title} onChange={(event) => titleChange(event)} />
        <div style={{ marginTop: "12px" }}>
          <label>Choose a time for your meeting</label>
          <div
            style={{ display: "flex", marginTop: "8px", alignItems: "center" }}
          >
            <input
              className="timePicker"
              type="time"
              value={startTime}
              onChange={(event) => setStartTime(event.target.value)}
            />
            <span
              style={{
                display: "flex",
                alignItems: "center",
                marginInline: "11px",
              }}
            >
              <IconArrowNarowRight />
            </span>
            <input
              className="timePicker"
              type="time"
              value={endTime}
              onChange={(event) => setEndTime(event.target.value)}
            />
          </div>
        </div>
        <label style={{ marginTop: "14px" }}>Attribute a color</label>
        <div style={{ display: "flex", marginTop: "6px" }}>
          {colors.map((color, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderStyle: selectedColor === color ? "block" : "hidden",
                border: `2px solid ${selectedColor === color ? color : "none"}`,
                padding: "1px",
                marginRight: "8px",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  backgroundColor: color,
                  width: "28px",
                  height: "28px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
                onClick={() => saveColor(color)}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <div id="bottom">
        {isUpdating ? (
          <CustomButton title="Update a task" onClick={() => updateTask()} />
        ) : (
          <CustomButton title="Create a task" onClick={() => saveTask()} />
        )}
      </div>
    </div>
  );
}
