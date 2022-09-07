import React from "react";

function All() {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
      }}
      className="btn btn-info"
    >
      All
    </button>
  );
}

export default All;
