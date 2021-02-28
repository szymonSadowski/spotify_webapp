import { Episode } from "./../types/Episode";
import { useState, useEffect } from "react";
import { resolve } from "path";

export const useFetch = (tokenCode: string) => {
  const [data, setData]: any = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchdata = async () => {
    const response = await fetch(
      `http://localhost:8080/podcast?access_token=${tokenCode}`
    );
    const dataResponse = await response.json();
    const myData = Object.keys(dataResponse).map((key) => {
      return dataResponse[key];
    });
    const idData = myData.map((data) => {
      return data.show.id as string;
    });
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
  var lp = 0;
  useEffect(() => {
    if (tokenCode) {
      fetchdata().then((res) => {
        res.map((id) => {
          fetchEpisodesData(id).then((episode: Episode) => {
            arr.push(episode);
            lp++;
            if (res.length == lp) {
              setData(arr);
              setLoading(false);
              resolve();
            }
          });
        });
      });
    }
  }, [tokenCode]);

  return { data, loading };
};
