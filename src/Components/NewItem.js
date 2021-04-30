import "./NewItem.css";

import React from "react";

const colors = ["#EDC2E5", "#C0D9E9", "#E3EE6A", "#F2926C", "#F2C56C"];

const NewItem = ({ setCurrentItem, addItem }) => {
  const [input, setInput] = React.useState("");
  const [color, setColor] = React.useState(colors[0]);

  React.useEffect(() => {
    setCurrentItem({
      text: input,
      color,
      key: Math.floor(Math.random() * 100000).toString() + Math.floor(Math.random() * 100000).toString()
    });
  }, [setCurrentItem, input, color]);

  // React.useEffect(() => {
  //   const colorBtns = document.querySelectorAll(".colorBtn")
  //   console.log(colorBtns)
  //   colorBtns.forEach(btn => {
  //     if (btn.style.backgroundColor === color) {
  //       btn.style.border = "2px solid white"
  //     } else {
  //       btn.style.border = "none"
  //     }
  //   })
  // }, [color])

  const resetInput = () => {
    setInput("");
    setColor(colors[0]);
  };

  const enterSubmit = (e) => {
    if (e.key === "Enter") {
      addItem();
      resetInput();
    }
  }

  return (
    <div className="NewItemBox">
      <h3 className="Header TextCenter">Create a new item</h3>
      <input
        className="InputBox"
        type="text"
        placeholder="Enter a new item here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={enterSubmit}
        style={{backgroundColor: color}}
      ></input>

      <div className="ColorPick">
        {colors.map((color) => {
          return (
            <button
              className="colorBtn"
              key={color}
              style={{ backgroundColor: color }}

              onClick={(e) => setColor(e.target.style.backgroundColor)}
            ></button>
          );
        })}
      </div>

      <button
        className="AddBtn"
        onClick={() => {
          addItem();
          resetInput();
        }}
      >
        Add
      </button>
      {/* <button className="ClearBtn" onClick={}>Clear</button> */}
    </div>
  );
};
export default NewItem;
