import React from "react";

export default function Spinner() {
  return (
    <div
      class="spinner-border text-primary"
      style={{ height: "5rem", width: "5rem" }}
      role="status"
    >
      <span class="sr-only">Loading...</span>
    </div>
  );
}
