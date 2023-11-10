import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Image,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";
import chatupLogo from "./Chatup.png";

// Página principal de inicio
function Homepage() {
  const history = useHistory();

// Redireccionar a la página de chat si el usuario ya está autenticado
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

// Renderizar la página de inicio
  return (
    <Container maxW="xl" centerContent>
      <Box
          d="flex"
          justifyContent="center"
          p={3}
          bg="gray"
          w="100%"
          h="20%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
          position="relative"
      >

<Image src= {chatupLogo} alt="Logo" w="100%" 
    h="100%" 
    objectFit="cover" // Utiliza "cover" para que la imagen se ajuste y cubra completamente el espacio
    position="absolute"/> 
   

        </Box>

      <Box bg="gray" w="100%" p={4} borderRadius="lg" borderWidth="1px" m="0px 0 15px 0">
        <Tabs isFitted variant="soft-rounded" colorScheme="teal">
          <TabList mb="1em">
            <Tab style={{ color: "black"}}>Login</Tab>
            <Tab style={{ color: "black"}}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
