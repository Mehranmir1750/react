function Message({ msg }) {
  return (
    <div style={{
      textAlign: msg.sender === "user" ? "right" : "left",
      margin: "10px"
    }}>
      <span style={{
        background: msg.sender === "user" ? "#0b93f6" : "#444",
        color: "white",
        padding: "10px",
        borderRadius: "10px"
      }}>
        {msg.text}
      </span>
    </div>
  );
}

export default Message;