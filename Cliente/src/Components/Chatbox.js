//El componente `Chatbox` representa el contenedor principal para mostrar un chat
import { Box } from "@chakra-ui/layout";
import "./styles.css";
import SingleChat from "./SingleChat";
import { ChatState } from "../Context/ChatProvider";

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState(); // Obtener el estado del chat seleccionado del contexto

// Mostrar la caja solo si hay un chat seleccionado
  return (
    <Box
      d={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="gray"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
     {/* Renderizar el componente SingleChat dentro de la caja */}
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} /> 
    </Box>
  );
};

export default Chatbox;
