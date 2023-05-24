import axios from "axios";

const resultsAPI = axios.create({
  baseURL: "http://localhost:3030/api/results",
});

export const getResults = async () => {
  const response = await resultsAPI.get("/");
  return response.data;
};

export const createResult = async (result) => {
  const response = await resultsAPI.post("/", course);
  return response.data;
};
