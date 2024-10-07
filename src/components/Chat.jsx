import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from 'react-markdown';

function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const enviar = async () => {
    if (message.trim()) {
      
      setMessages((prevMessages) => [...prevMessages, { user: true, text: formatMessage(message) }]);
      setMessage("");
      setIsLoading(true);

      try {
        const response = await fetch("https://adams42.up.railway.app/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        });

        if (!response.ok) {
          throw new Error("Erro na resposta do servidor");
        }

        const data = await response.json();
        
        const formattedResponse = formatMessage(data.response);

        setMessages((prevMessages) => [
          ...prevMessages,
          { user: false, text: formattedResponse },
        ]);
      } catch (error) {
        console.error("Erro ao enviar a mensagem:", error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { user: false, text: "Ocorreu um erro ao enviar a mensagem." },
        ]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const formatMessage = (text) => {
    return text.replace(/([.?!])\s+/g, "$1\n\n");
  };

  const enterPress = (e) => {
    if (e.key === "Enter") enviar();
  };

  return (
    <main>
      <div className="container">
        <div className="chat-container">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`chat-message ${msg.user ? "user-balloon" : "assistant-balloon"}`}
              style={{
                marginBottom: '2.5em',  // Espaço entre as frases
                lineHeight: '2.6',      // Espaço entre linhas da mesma frase
              }}
            >
              <div className="message-text">
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              </div>
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
            placeholder="Write your question"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={enterPress}
          />
          <button onClick={enviar}> SEND </button>
        </div>
      </div>
    </main>
  );
}

export default Chat;
