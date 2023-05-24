import axios from "axios";

const studentsApi = axios.create({
  baseURL: "http://localhost:3030/api/students",
});

export const getStudents = async () => {
  const response = await studentsApi.get("/");
  return response.data;
};

export const createStudent = async (student) => {
  const response = await studentsApi.post("/", student);
  return response.data;
};
