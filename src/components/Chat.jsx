import React from "react"
import { useState } from "react"

function Chat() {
  const [message, setMessage] = useState(""); // Estado para armazenar o valor do input
  const [messages, setMessages] = useState([]); // Estado para armazenar as mensagens enviadas
  const [isLoading, setIsLoading] = useState(false); // Estado para controlar o carregamento

  const enviar = () => {
    if (message.trim() !== "") {
      setMessages([...messages, message]); // mensagem adicionada na lista de mensagem
      setMessage("");

      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setMessages((prevMessages) => [
          ...prevMessages,
          "Mensagem generica que no futuro virá da IA",
        ]);
      }, 2000);
    }
  };

  // click "Enter"
  const enterPress = (tecla) => {
    if (tecla.key === "Enter") {
      enviar();
    }
  };

  return (
    <main>
      <div className="chat-container">
        {messages.map((msg, msgList) => (
          <div key={msgList} className="chat-message user-balloon">
            {msg}
          </div>
        ))}

        {isLoading && (
          <div className="chat-message loading">
            <div className="loader"></div>
          </div>
        )}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Escreva seu questionamento"
          value={message}
          onChange={(tecla) => setMessage(tecla.target.value)}
          onKeyDown={enterPress}
        />
        <button onClick={enviar}>ENVIAR &gt;&gt;</button>
      </div>
    </main>
  );
}

export default Chat;
