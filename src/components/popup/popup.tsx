import React, { useState, useRef, useEffect } from "react";
import "./popup.css";
import { IconBrandFlickr, IconDelete, IconEdit } from "../../icons/icons";
import { Todo } from "../../type";

function Popup(props: {
  todo: Todo;
  editTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const { deleteTodo, editTodo, todo } = props;
  const togglePopup = (): void => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (): void => {
    setIsOpen(false);
    // Perform any other action when an option is selected
  };

  return (
    <div className="popup-container">
      <div onClick={togglePopup}>
        <IconBrandFlickr />
      </div>
      {isOpen && (
        <div
          className="popup"
          ref={popupRef}
          onMouseLeave={() => handleOptionClick()}
        >
          <ul>
            <li
              className="popup-item"
              onClick={() => {
                editTodo(todo.id);
                handleOptionClick();
                // alert("edit");
              }}
            >
              <IconEdit />
              <span style={{ marginLeft: "8px" }}>Edit</span>
            </li>
            <li
              className="popup-item"
              onClick={() => {
                deleteTodo(todo.id);
                handleOptionClick();
                // alert("delete");
              }}
            >
              <IconDelete />
              <span style={{ marginLeft: "8px", color: "red" }}>Delete</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Popup;
