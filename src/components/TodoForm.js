import React, { useEffect, useState } from "react";
import List from "./List";
import Item from "./Item";
import All from "./All";
import Active from "./Active";
import Done from "./Done";
import AddTask from "./AddTask";

function TodoForm() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    let savedItems = JSON.parse(localStorage.getItem("items"));
    if (savedItems) setItems(savedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  //valor do input
  const handleChange = (e) => {
    let t = e.target.value;
    setText(t);
  };

  //adicionar novo item
  const addItem = (e) => {
    e.preventDefault();
    if (text) {
      let item = new Item(text);
      setItems([...items, item]);
      setText("");
    }
  };

  //deletar item
  const onDeleteItem = (item) => {
    let filteredItems = items.filter((it) => it.id !== item.id);
    setItems(filteredItems);
  };

  //marcar item feito
  const onDoneItem = (item) => {
    const updatedItems = items.map((it) => {
      if (it.id === item.id) {
        it.done = !it.done;
      }
      return it;
    });
    setItems(updatedItems);
  };

  return (
    <form>
      <div className="d-flex flex-row gap-2">
        <div className="input-group w-75">
          <input
            type="text"
            className="form-control"
            placeholder="type to search"
            aria-describedby="basic-addon1"
            onChange={handleChange}
            value={text}
          ></input>
        </div>

        <AddTask onAddItem={addItem} />
      </div>

      <div className="d-flex justify-content-end gap-2 my-2">
        <All />
        <Active />
        <Done />
      </div>

      <div>
        <List
          items={items}
          onDeleteItem={onDeleteItem}
          onDoneItem={onDoneItem}
        />
      </div>
    </form>
  );
}

export default TodoForm;
