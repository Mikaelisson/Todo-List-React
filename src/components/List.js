import React from "react";
import Card from "./Card";

function DoneImg(props) {
  if (props.done) {
    return <img src="./assets/img/on.png" alt="done"></img>;
  } else {
    return <img src="./assets/img/off.png" alt="undone"></img>;
  }
}

function List(props) {
  return (
    <ul className="mt-2 p-0">
      {props.items
        .map((item) => {
          return (
            <li key={item.id} className="list-unstyled">
              <Card
                className={
                  item.done
                    ? "done w-100 card d-flex flex-row justify-content-between align-items-center p-2 text-dark my-2 bg-success"
                    : "w-100 card d-flex flex-row justify-content-between align-items-center p-2 text-dark my-2"
                }
              >
                {item.text}
                <div>
                  <button
                    className="btn me-2"
                    onClick={() => {
                      props.onDone(item);
                    }}
                  >
                    <DoneImg done={item.done} />
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      props.onItemDeleted(item);
                    }}
                  >
                    <img src="./assets/img/trash.png" alt="lixeira"></img>
                  </button>
                </div>
              </Card>
            </li>
          );
        })
        .reverse()}
    </ul>
  );
}

export default List;
