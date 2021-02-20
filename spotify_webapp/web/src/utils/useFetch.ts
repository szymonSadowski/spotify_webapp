import { useState, useEffect } from "react";

export const useFetch = (tokenCode: string) => {
    // console.log(tokenCode);
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const fetchdata = async () => {
        const response = await fetch(
          `http://localhost:8080/podcast?access_token=${tokenCode}`
        );
        const dataResponse = await response.json();
        // const item = dataResponse.results[0];
        const myData = Object.keys(dataResponse).map(key => {
          return dataResponse[key];
        });
        // console.log(myData[0].show.id)
        const idData = myData.map(data => {
          return data.show.id as string;
        })
        console.log(idData, 'idData')
        setData(idData);
        console.log(dataResponse);
      };
      fetchdata();
    }, [tokenCode]);
    return { data, loading };
  };