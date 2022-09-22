import axios from "axios";

const API_URL = "https://randomuser.me/api";

export const fetchData = () => {
  return axios
    .get(API_URL)
    .then(({ data }) => data)
    .catch((err) => {
      console.error(err);
    });
};

export const fetchNextData = (page: number) => {
  return axios
    .get(`${API_URL}?page=${page}`)
    .then(({ data }) => data)
    .catch((err) => {
      console.error(err);
    });
};
