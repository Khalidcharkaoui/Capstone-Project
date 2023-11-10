import React, { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

// Creación del contexto para gestionar el estado del chat
const ChatContext = createContext();

// Proveedor del contexto que encapsula la lógica de estado global del chat
const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState();
  const [user, setUser] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState();

// Objeto para manejar el historial de navegación
  const history = useHistory();

// Efecto secundario para cargar la información del usuario al iniciar la aplicación
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if (!userInfo) history.push("/");
    
  }, [history]);

// Proporcionar el contexto y sus valores a los componentes hijos
  return (
    <ChatContext.Provider
      value={{
        selectedChat,
        setSelectedChat,
        user,
        setUser,
        notification,
        setNotification,
        chats,
        setChats,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

// Hook personalizado para acceder al estado del contexto
export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
