import { useState } from "react";

function InputBox({ sendMessage }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    sendMessage(input);
    setInput("");
  };

  return (
    <div style={{ display: "flex", padding: "10px" }}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        style={{ flex: 1, padding: "10px" }}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default InputBox;