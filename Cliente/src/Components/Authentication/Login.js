import { Button } from "@chakra-ui/button";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { ChatState } from "../../Context/ChatProvider";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);   // Función para alternar la visibilidad de la contraseña
  const toast = useToast();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const { setUser } = ChatState();

// Función que maneja el envío del formulario de inicio de sesión
  const submitHandler = async () => {
    setLoading(true);
  
    if (!email || !password) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    } // Validación: asegura que se ingresen el correo y la contraseña

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };      // Configuración de la solicitud HTTP


      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );       // Realiza la solicitud de inicio de sesión al servidor


      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setUser(data);
      localStorage.setItem("userInfo", JSON.stringify(data));   // Muestra un mensaje de éxito y almacena la información del usuario
      setLoading(false);
      history.push("/chats"); // Redirige a la página de chats después del inicio de sesión
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }       // Muestra un mensaje de error en caso de problemas durante el inicio de sesión

  };

  // Formulario de iniciar sesión
  return (
    <VStack spacing="10px">
      <FormControl id="email" isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input
          value={email}
          type="email"
          color="white"
          placeholder= "Your Email Address"
          _placeholder= {{ color: 'white' }}
          _focus={{ borderColor: 'teal' }} 
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={show ? "text" : "password"}
            color="white"
            placeholder="Your Password"
            _placeholder={{ color: 'white' }}
            _focus={{ borderColor: 'teal' }} 
          />
          <InputRightElement width="3rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? <ViewOffIcon boxSize={5} /> : <ViewIcon boxSize={5} />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme= "teal" //Azul turquesa
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Log in
      </Button>
      <Button
        variant="solid"
        colorScheme="purple"
        width="100%"
        onClick={() => {
          setEmail("guest@gmail.com");
          setPassword("123456");
        }}
      >
        log in like a Guest 
      </Button>
    </VStack>
  );
};

export default Login;
