import axios from "axios";

const apiURL = import.meta.env.VITE_API_URL
  ? import.meta.env.VITE_API_URL + "/results"
  : undefined;

const resultsAPI = axios.create({
  baseURL: apiURL || "http://localhost:3030/api/results",
});

export const getResults = async () => {
  const response = await resultsAPI.get("/");
  return response.data;
};

export const createResult = async (result) => {
  const response = await resultsAPI.post("/", result);
  return response.data;
};
