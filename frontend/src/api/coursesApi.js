import axios from "axios";

const apiURL = import.meta.env.VITE_API_URL
  ? import.meta.env.VITE_API_URL + "/courses"
  : undefined;

const coursesAPI = axios.create({
  baseURL: apiURL || "http://localhost:3030/api/courses",
});

export const getCourses = async () => {
  const response = await coursesAPI.get("/");
  return response.data;
};

export const createCourse = async (course) => {
  const response = await coursesAPI.post("/", course);
  return response.data;
};
