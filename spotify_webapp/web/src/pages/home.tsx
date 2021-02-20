import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Container } from "../components/Container";
import Spotify from "spotify-web-api-js";
import { NavBar } from "../components/NavBar";
import { useFetch } from "../utils/useFetch";



const Home = () => {
  const router = useRouter();
  const token = router.query;
  const spotifyApi = new Spotify();
  const tokenCode = token.access_token as string;
  const [name, setName] = useState<string | null | undefined>(null);
  const [loading, setLoading] = useState(true);
  const { data } = useFetch(tokenCode);
  const ids = Object.values(data as string);


  if (typeof tokenCode == "string") {
    console.log(tokenCode, "tokenCode");
  } else {
    return "Token access not granted";
  }

  spotifyApi.setAccessToken(tokenCode);

  spotifyApi.getMe().then((res) => {
    console.log(res);
    const resName = res.display_name;
    setName(resName);
    console.log(res.display_name);
  });
    if(ids.length > 1 ) {
      spotifyApi.getShows(ids).then((res) => {
        setLoading(false);
      })
    } else {
      console.log(loading);
    }
  

  return (
    <Container height="100vh">
      <NavBar name={name} />
      {loading ? <div> loading </div> : <div>data</div>}
    </Container>
  );
};

export default Home;
