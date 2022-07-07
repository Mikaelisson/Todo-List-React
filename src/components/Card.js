import React from "react";

function Card(props) {
  return <div className={`${props.className} card d-flex flex-row justify-content-between align-items-center p-2 text-dark my-2`}>{props.children}</div>;
}

export default Card;
