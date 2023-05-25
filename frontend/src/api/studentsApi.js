import axios from "axios";

const apiURL = import.meta.env.VITE_API_URL
  ? import.meta.env.VITE_API_URL + "/students"
  : undefined;

const studentsAPI = axios.create({
  baseURL: apiURL || "http://localhost:3030/api/students",
});
export const getStudents = async () => {
  const response = await studentsAPI.get("/");
  return response.data;
};

export const createStudent = async (student) => {
  const response = await studentsAPI.post("/", student);
  return response.data;
};
