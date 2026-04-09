import { useState } from "react";
import Message from "./Message";
import InputBox from "./InputBox";

function ChatWindow() {
  const [messages, setMessages] = useState([]);

  const sendMessage = (text) => {
    // user message
    const userMsg = { text, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);

    // fake AI reply
    setTimeout(() => {
      const aiMsg = { text: "Hello from Talkify AI 🤖", sender: "ai" };
      setMessages((prev) => [...prev, aiMsg]);
    }, 1000);
  };

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      
      <div style={{ flex: 1, padding: "10px", overflowY: "auto" }}>
        {messages.map((msg, index) => (
          <Message key={index} msg={msg} />
        ))}
      </div>

      <InputBox sendMessage={sendMessage} />
    </div>
  );
}

export default ChatWindow;