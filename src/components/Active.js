import React from "react";

function Active() {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
      }}
      className="btn btn-outline-secondary"
    >
      Active
    </button>
  );
}

export default Active;
