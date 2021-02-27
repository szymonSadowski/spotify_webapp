import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Container } from "../components/Container";
import Spotify from "spotify-web-api-js";
import { NavBar } from "../components/NavBar";
import { useFetch } from "../utils/useFetch";
import {
  Heading,
  Img,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Episode } from "../types/Episode";

const Home = () => {
  const router = useRouter();
  const token = router.query;
  const spotifyApi = new Spotify();

  const [name, setName] = useState<string | null | undefined>(null);

  const tokenCode = token.access_token as string;
  const { data, loading } = useFetch(tokenCode);

  // if (!loading) {
  //   console.log(data, shows);
  // }

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
      <Table colorScheme="grey" p={4} color="white" fontSize="24px">
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Podcast</Th>
            <Th>Episode</Th>
            <Th>Date</Th>
          </Tr>
        </Thead>
        {loading ? (
          <div> loading </div>
        ) : (
          <Tbody>
            {data.map((episode: Episode, index: number) => {
              // console.log(shows);
              return (
                <Tr>
                  <Td>{index + 1}</Td>
                  <Td maxW={100}>
                    <Img src={episode.img}></Img>
                  </Td>
                  <Td maxW={400} p={2}>
                    {episode.name}
                  </Td>
                  <Td>{episode.date}</Td>
                </Tr>
              );
            })}
          </Tbody>
        )}
      </Table>
    </Container>
  );
};

export default Home;
