import { Container } from "../components/Container";
import { Button, Link, Text, useColorMode } from "@chakra-ui/react";
import { NavBar } from "../components/NavBar";

const Index = () => {
  const colorMode = useColorMode();

  return (
    <Container height="100vh">
      <NavBar name={null}></NavBar>
      {colorMode.colorMode === "dark" ? (
        <Text color="white" fontSize="24px" mt={4}>
          Login with spotify to access your data and see available podcasts
        </Text>
      ) : (
        <Text color="black" fontSize="24px" mt={4}>
          Login with spotify to access your data and see available podcasts
        </Text>
      )}

      <Link href="http://localhost:8080/login">
        <Button mt={10} color="white" colorScheme="whatsapp" size="lg">
          login with spotify
        </Button>
      </Link>
    </Container>
  );
};

export default Index;
