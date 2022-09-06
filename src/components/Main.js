import { useState } from "react";

function Main() {
  const [users, setUsers] = useState([]);

  const addItem = (e) => {
    e.preventDefault();
    const userInput = document.getElementById("userInput");
    if (userInput.value && userInput.value !== " ") {
      setUsers([...users, userInput.value]);
      console.log(userInput.value);
    }
  };

  return (
    <div>
      <form>
        <div className="d-flex flex-row gap-2">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="type to search"
              id="userInput"
              aria-describedby="basic-addon1"
            ></input>
          </div>
          <button onClick={(e)=>{e.preventDefault()}} className="btn btn-info">All</button>
          <button onClick={(e)=>{e.preventDefault()}} className="btn btn-outline-secondary">Active</button>
          <button onClick={(e)=>{e.preventDefault()}} className="btn btn-outline-secondary">Done</button>
        </div>

        <div className="d-flex justify-content-end my-2">
          <button
            onClick={addItem}
            id="addItem"
            className="btn btn-outline-primary"
          >
            Add Task
          </button>
        </div>

        <ul className="list-group">
          {users.map((user, index) => {
            return (
              <li key={index} className="list-group-item">
                {user}
              </li>
            );
          })}
        </ul>
      </form>
    </div>
  );
}

export default Main;
