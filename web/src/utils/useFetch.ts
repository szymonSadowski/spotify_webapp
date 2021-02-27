import { Episode } from "./../types/Episode";
import { useState, useEffect } from "react";
import { resolve } from "path";
// import SpotifyWebApi from "spotify-web-api-js";

export const useFetch = (tokenCode: string) => {
  const [data, setData]: any = useState([]);
  const [loading, setLoading] = useState(true);
  // const [shows, setShows]: any = useState([]);
  // const spotifyApi = new SpotifyWebApi();
  const fetchdata = async () => {
    const response = await fetch(
      `http://localhost:8080/podcast?access_token=${tokenCode}`
    );
    const dataResponse = await response.json();
    // const item = dataResponse.results[0];
    const myData = Object.keys(dataResponse).map((key) => {
      return dataResponse[key];
    });
    // console.log(myData[0].show.id)
    const idData = myData.map((data) => {
      return data.show.id as string;
    });
    // console.log(idData, "idData");
    // getting list that contains names of the shows
    // const showsList: any[] = [];
    // spotifyApi.getShows(idData).then((res) => {
    //   res.shows.forEach((element) => {
    //     showsList.push(element.name as string);
    //   });
    // });
    // setShows(showsList);
    return idData;
  };
  const fetchEpisodesData = async (id: string) => {
    const response = await fetch(
      `http://localhost:8080/podcastEpisodes?access_token=${tokenCode}&id=${id}`
    );
    const dataResponse = await response.json();
    return dataResponse;
  };
  const arr: any[] = [];
  useEffect(() => {
    fetchdata().then((res) => {
      res.map((id, index) => {
        fetchEpisodesData(id).then((episode: Episode) => {
          arr.push(episode);
          if (index > 48) {
            setData(arr);
            setLoading(false);
            resolve();
          }
        });
      });
    });
  }, [tokenCode]);

  return { data, loading };
};
