import axios from "axios";
import express from "express";
import request from "request";
import queryString from "querystring";
import "dotenv/config";

const redirect_uri = process.env.REDIRECT_URL;

const app = express();

app.get("/login", (_, res) => {
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      queryString.stringify({
        response_type: "code",
        client_id: process.env.CLIENT_ID,
        scope:
          "user-read-private user-read-email user-library-read user-read-playback-position",
        redirect_uri,
      })
  );
});

app.get("/callback", (req, res) => {
  let code = req.query.code || null;
  let authOptions = {
    url: "https://accounts.spotify.com/api/token",
    form: {
      code: code,
      redirect_uri,
      grant_type: "authorization_code",
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
    },
    json: true,
  };
  request.post(authOptions, (_, __, body) => {
    var access_token = body.access_token;
    let uri = process.env.FRONT_URL;
    res.redirect(uri + "?access_token=" + access_token);
  });
});

app.get("/podcast", async (req, res) => {
  try {
    const access_token = req.query.access_token;
    const podcasts = await axios
      .get("https://api.spotify.com/v1/me/shows", {
        headers: {
          Authorization: "Bearer " + access_token,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        params: {
          limit: 50,
          offset: 1,
        },
      })
      .then((response: any) => {
        const data = response.data.items;
        return data;
      });
    // console.log(podcasts)
    res.header("Access-Control-Allow-Origin", "*");
    res.json(podcasts);
  } catch (error) {
    console.log(error);
  }
});

app.get("/podcastEpisodes", async (req, res) => {
  try {
    const access_token = req.query.access_token;
    const id = req.query.id;
    const podcasts = await axios
      .get(`https://api.spotify.com/v1/shows/${id}/episodes`, {
        headers: {
          Authorization: "Bearer " + access_token,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        params: {
          market: "PL",
          limit: 1,
          offset: 0,
        },
      })
      .then((response: any) => {
        const data = {
          // we take latest episode
          name: response.data.items[0].name,
          description: response.data.items[0].description,
          date: new Date(response.data.items[0].release_date),
          dateString: response.data.items[0].release_date,
          // because we take 64x64 img => 0 = 640x640; 1 = 300x300; 2 = 64x64
          img: response.data.items[0].images[2].url,
          url: response.data.items[0].external_urls.spotify,
        };
        return data;
      });
    // console.log(podcasts)
    res.header("Access-Control-Allow-Origin", "*");
    res.json(podcasts);
  } catch (error) {
    console.log(error);
  }
});

let port = process.env.PORT;
console.log(
  `Listening on port ${port}. Go /login to initiate authentication flow.`
);
app.listen(port);
