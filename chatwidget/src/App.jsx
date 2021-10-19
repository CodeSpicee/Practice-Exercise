import React from "react";
import Body from "./components/Body";
import Form from "./components/Form";
import Header from "./components/Header";
import { useState } from "react";
import Support from "./components/Support";

const App = () => {
  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState("");
  const addMessage = (e) => {
    e.preventDefault();
    const createMessage = [
      {
        name: message,
        id: chat.length + 1,
      },
    ];
    if (message.trim() === "") return;

    // setChat(chat.concat(createMessage));
    setChat([...chat, ...createMessage]);
    setMessage("");
  };
  return (
    <div className="App">
      <Header className="Header" />
      <div className="chat-area">
        <Support />

        {chat.map((message, messageIndex) => (
          <Body text={message.name} key={messageIndex} />
        ))}
      </div>

      <Form
        onSubmit={addMessage}
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
    </div>
  );
};

export default App;
