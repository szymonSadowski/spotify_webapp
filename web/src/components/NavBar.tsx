import { Flex, Box, Link, Text, Heading } from "@chakra-ui/react";
import React from "react";
// import NextLink from "next/Link";
import { DarkModeSwitch } from "./DarkModeSwitch";
interface NavBarProps {
  name: string | null | undefined;
}

export const NavBar: React.FC<NavBarProps> = ({ name }) => {
  let body = null;
  if (name !== null || undefined) {
    body = (
      <>
        <Flex p={4}>
          <Box ml={"auto"}>
            <Text color="white" fontSize="24px">
              Hello, {name}
            </Text>
          </Box>
        </Flex>
      </>
    );
  } else {
    body = (
      <Flex p={4}>
        <Box ml={"auto"}>
        <Text color="white" fontSize="24px">
              Sign using your spotify account
            </Text>
        </Box>
      </Flex>
    );
  }

  return (
    <Flex position="sticky" top={0} zIndex={1} bg="#58C184" p={4} width="100%">
      <Flex flex={1} m="auto" align="center" maxW={800}>
          <Link href="/">
            <Heading textColor="white">SpotifyPodcastApp</Heading>
          </Link>
        <Box mr={4} ml={"auto"}>
          {body}
        </Box>
        <DarkModeSwitch />
      </Flex>
    </Flex>
  );
};
