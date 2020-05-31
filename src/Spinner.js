import React from "react";

export default function Spinner() {
  return (
    <div
      className="spinner-border text-primary"
      style={{ height: "5rem", width: "5rem" }}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
