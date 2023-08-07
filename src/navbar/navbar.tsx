import { useState } from "react";
import "./navbar.css";
import { IconArrowNarrowRight } from "@tabler/icons";
import CustomButton from "../components/button";

export default function Navbar(props: { onTaskCreate: any }) {
  const [title, setTitle] = useState("");
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const titleChange = (event: any) => {
    setTitle(event.target.value);
    console.log(title);
  };

  function saveTask() {
    props.onTaskCreate({
      name: title,
      color: selectedColor,
      startTime: startTime,
      endTime: endTime,
    });
    setTitle("");
    setStartTime("");
    setEndTime("");
    setSelectedColor(null)
  }

  const colors = ["#05EB00", "#FFA471", "#DE82FF", "#87C5FF"];

  return (
    <div id="navbar">
      <div id="top">
        <label>Task title</label>
        <textarea value={title} onChange={(event) => titleChange(event)} />
       <div style={{marginTop:"12px"}}>
       <label>Choose a time for your meeting</label>
        <div style={{ display: "flex" }}>
          <input
            className="timePicker"
            type="time"
            value={startTime}
            onChange={(event) => setStartTime(event.target.value)}
          />
          {/* <IconArrowNarrowRight/> */}
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
          {colors.map((color) => (
            <div
              style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                borderStyle: selectedColor === color ? "block" : "hidden",
                border: `2px solid ${selectedColor === color ? color : "none"}`,
                padding:"1px",
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
                }}
                onClick={() => setSelectedColor(color)}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <div id="bottom">
        <CustomButton title="Create a task" onClick={() => saveTask()} />
      </div>
    </div>
  );
}
