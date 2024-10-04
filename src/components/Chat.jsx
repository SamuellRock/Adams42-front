import React, { useState, useEffect, useRef } from "react";

function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const enviar = () => {
    if (message.trim()) {
      setMessages([...messages, message]);
      setMessage("");
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setMessages((prevMessages) => [
          ...prevMessages,
          "Mensagem genérica que no futuro virá da IA",
        ]);
      }, 2000);
    }
  };

  const enterPress = (e) => {
    if (e.key === "Enter") enviar();
  };

  return (
    <main>
      <div className="chat-container">
        {messages.map((msg, index) => (
          <div key={index} className="chat-message user-balloon">
            {msg}
          </div>
        ))}
        {isLoading && (
          <div className="chat-message loading">
            <div className="loader"></div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Escreva seu questionamento"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={enterPress}
        />
        <button onClick={enviar}>ENVIAR &gt;&gt;</button>
      </div>
    </main>
  );
}

export default Chat;
