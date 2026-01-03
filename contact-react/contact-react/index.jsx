import React from "react";
import { createRoot } from "react-dom/client";

function ContactNote() {
  return (
    <p style={{ textAlign: "center", margin: "20px 0" }}>
      This section is rendered with React ⚛️
    </p>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<ContactNote />);
