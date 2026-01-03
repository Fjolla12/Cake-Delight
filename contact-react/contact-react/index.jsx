const root = ReactDOM.createRoot(document.getElementById("root"));

function ContactNote() {
  return React.createElement(
    "div",
    {
      style: {
        background: "#fff3cd",
        padding: "15px",
        borderRadius: "8px",
        textAlign: "center",
        marginBottom: "20px",
        border: "1px solid #ffeeba"
      }
    },
    "🍰 For custom cake orders, please contact us at least 48 hours in advance."
  );
}

root.render(React.createElement(ContactNote));
