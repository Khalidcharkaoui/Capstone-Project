import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../Components/Chatbox";
import MyChats from "../Components/MyChats";
import SideDrawer from "../Components/Diverseparts/SideDrawer";
import { ChatState } from "../Context/ChatProvider";

// Página principal del chat
const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);  // Estado para forzar la recarga de datos
  const { user } = ChatState();  // Obtener información del usuario desde el contexto global

// Renderizar la página principal del chat
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;
