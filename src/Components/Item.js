import React from "react";

import "./Item.css";
import Pencil from "../Icons/pencil.png";
import Trash from "../Icons/trash.png";
import Tick from "../Icons/tick.png";



const TextOrEdit = ({ isEditing, item, submitEdit, setEditText, resetInputBox }) => {
  if (isEditing) {
    return (
      <input
        id={item.key}
        placeholder={item.text}
        onChange={(e) => setEditText(e.target.value)}
        onKeyPress={(e) => {
          submitEdit(e);
          resetInputBox(e);
        }}
      ></input>
    );
  } else {
    return <p>{item.text}</p>;
  }
};

const Item = ({ item, deleteItem, setEditText, submitEdit }) => {
  const [isEditing, setIsEditing] = React.useState(false);

  const resetInputBox = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false)
    }
  }

  return (
    <li className="ItemMain" style={{ backgroundColor: item.color }}>
      <TextOrEdit
        isEditing={isEditing}
        item={item}
        setEditText={setEditText}
        submitEdit={submitEdit}
        resetInputBox={resetInputBox}
        
      />

      <div className="Buttons">
        {/* Complete */}
        <button style={{ backgroundColor: "#B4C032" }}>
          <img src={Tick} alt="Edit" />
        </button>

        {/* Edit */}
        <button
          onClick={() => {
            isEditing ? setIsEditing(false) : setIsEditing(true);
          }}
          style={{ backgroundColor: "green" }}
        >
          <img src={Pencil} alt="Edit" />
        </button>

        {/* Delete */}
        <button
          onClick={deleteItem}
          style={{ backgroundColor: "red" }}
          id={item.key}
        >
          <img src={Trash} alt="Edit" id={item.key} />
        </button>
      </div>
    </li>
  );
};

export default Item;
