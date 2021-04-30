import React from "react";
import "./App.css";

import List from "./Components/List";
import NewItem from "./Components/NewItem";

function App() {
  const [contents, setContents] = React.useState([]);
  const [currentItem, setCurrentItem] = React.useState({});

  const [editText, setEditText] = React.useState("");

  const addItem = () => {
    if (currentItem.text !== "") {
      const newItemArray = contents.concat(currentItem);
      console.log(newItemArray);
      setContents(newItemArray);
    }
  };

  const deleteItem = (e) => {
    const filteredList = contents.filter((item) => item.key !== e.target.id);
    setContents(filteredList);
  };

  const submitEdit = (e) => {
    if (e.key === "Enter") {
      console.log(editText)
      const editList = [...contents]
      for (let i = 0; i < editList.length; i++) {
        if (editList[i].key === e.target.id) {
          editList[i].text = editText
        }
      }
      setContents(editList);
    }
  };

  return (
    <div className="App">
      <div className="Main">
        <h1 className="TextCenter">Todododo!</h1>

        <List
          contents={contents}
          deleteItem={deleteItem}
          setEditText={setEditText}
          submitEdit={submitEdit}
        />

        <NewItem setCurrentItem={setCurrentItem} addItem={addItem} />
      </div>
    </div>
  );
}

export default App;

// todo list

// can enter new items from a popup
// can color code items
// can mark items as complete
// can display completed items
// can edit items
// can filter by category
// can sort by priority
