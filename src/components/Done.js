import React from "react";

function Done() {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
      }}
      className="btn btn-outline-secondary"
    >
      Done
    </button>
  );
}

export default Done;
