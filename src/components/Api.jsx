import axios from "axios";

const API_KEY = "22b1617239cb5e7067b3f06c9deea96d";

export const getCurrentWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  const response = await axios.get(url);
  return response.data;
};
