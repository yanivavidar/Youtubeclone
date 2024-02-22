import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";
let ordering = ["date", "relevance", "rating", "title", "viewCount"];
let index = Math.floor(Math.random() * ordering.length);
const options = {
  params: {
    maxResults: "50",
    regionCode: "US",
  },
  headers: {
    "X-RapidAPI-Key": "bba14d12aemshad732c1f65431d1p16d983jsn8fbea79032c5",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url, channel) => {
  options.params.order = !channel ? ordering[index] : "date";
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  //url string we are getting in as a parameter

  return data;
};
