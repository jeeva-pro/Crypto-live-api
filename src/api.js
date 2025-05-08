import axios from "axios";

export const fetchCryptoData = async () => {
  const url = "https://api.binance.com/api/v3/ticker/24hr";
  return axios.get(url);
};


