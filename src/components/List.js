import React from "react";
import ListItem from "./ListItem";

function List(props) {
  return (
    <ul className="mt-2 p-0"> 
      {props.items.map((item) => {
          return (
            <ListItem key={item.id} item={item} onDone={props.onDone} onItemDeleted={props.onItemDeleted} />
          );
        }).reverse()
      }
    </ul>
  );
}

export default List;
