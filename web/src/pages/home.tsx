import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Container } from "../components/Container";
import Spotify from "spotify-web-api-js";
import { NavBar } from "../components/NavBar";
import { useFetch } from "../utils/useFetch";
import {
  Box,
  Button,
  Heading,
  Img,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Flex,
} from "@chakra-ui/react";
import { Episode } from "../types/Episode";
import { SpinnerIcon } from "@chakra-ui/icons";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Link } from "@chakra-ui/react"
const Home = () => {
  const router = useRouter();
  const token = router.query;
  const spotifyApi = new Spotify();

  const [name, setName] = useState<string | null | undefined>(null);

  const tokenCode = token.access_token as string;
  const { data, loading } = useFetch(tokenCode);

  if (!loading) {
	
    const sortedStudents = data.sort((a: any, b: any) => b.date > a.date ? 1: -1);
    console.log(sortedStudents)
    // console.log(data);
    // data.map((episode: Episode) => {
    //   const e = episode.date;
    //   const newDate = new Date(e);
    //   console.log(newDate, typeof(newDate))
    // })
  }

  useEffect(() => {
    if (typeof tokenCode == "string") {
      // console.log(tokenCode, "tokenCode");

      spotifyApi.setAccessToken(tokenCode);
      spotifyApi.getMe().then((res) => {
        // console.log(res);
        // setting up name on navbar
        const resName = res.display_name;
        setName(resName);
        console.log(res.display_name);
      });
    }
  }, [tokenCode]);

  return (
    <Container height="1000vh">
      <NavBar name={name} />
      <Heading p={4}>Table with your latest Spotfy podcasts</Heading>
      <br></br>
      {loading ? (
        <Box alignContent="center">
          <Heading>
            Loading
            <SpinnerIcon m={4} />
          </Heading>
        </Box>
      ) : (
        <Table
          colorScheme="grey"
          p={4}
          color="white"
          fontSize="24px"
          maxW="60%"
        >
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Podcast</Th>
              <Th>Episode</Th>
              <Th>Date</Th>
              <Th>Play Podcast</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((episode: Episode, index: number) => {
              // console.log(shows);
              return (
                <Tr>
                  <Td>{index + 1}</Td>
                  <Td maxW={100}>
                    <Img width="64px" height="64px" src={episode.img}></Img>
                  </Td>
                  <Td maxW={400}>{episode.name}</Td>
                  <Td>{episode.dateString}</Td>
                  <Td>
                    <Link href={episode.url} isExternal>
                      <Button
                        color="white"
                        colorScheme="whatsapp"
                        size="lg"
                      >
                        PLAY 
                        <ExternalLinkIcon mx="2px" />
                      </Button>
                    </Link>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      )}
    </Container>
  );
};

export default Home;
