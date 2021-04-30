import "./List.css";
import Item from "./Item";

const List = ({ contents, deleteItem, setEditText, submitEdit }) => {
  return (
    <ul className="ListMain">
      {contents.map((item) => {
        return (
          <Item
            item={item}
            deleteItem={deleteItem}
            key={item.key}
            setEditText={setEditText}
            submitEdit={submitEdit}
          />
        );
      })}
    </ul>
  );
};

export default List;
