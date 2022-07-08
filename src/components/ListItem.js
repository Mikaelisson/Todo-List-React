import React from "react";
import Card from "./Card";

function DoneImg(props) {
  if (props.done) {
    return <img src="./assets/img/on.png" alt="done"></img>;
  } else {
    return <img src="./assets/img/off.png" alt="undone"></img>;
  }
}

function ListItem(props) {
  return (
    <li className="list-unstyled">
      <Card
        className={
          props.item.done
            ? "done w-100 card d-flex flex-row justify-content-between align-items-center p-2 text-dark my-2 bg-success"
            : "w-100 card d-flex flex-row justify-content-between align-items-center p-2 text-dark my-2"
        }
      >
        {props.item.text}
        <div className="d-flex justify-content-center align-items-center">
          <button
            className="btn me-2"
            onClick={() => {
              props.onDone(props.item);
            }}
          >
            <DoneImg done={props.item.done} />
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              props.onItemDeleted(props.item);
            }}
          >
            <img src="./assets/img/trash.png" alt="lixeira"></img>
          </button>
        </div>
      </Card>
    </li>
  );
}

export default ListItem;
