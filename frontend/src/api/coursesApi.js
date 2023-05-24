import axios from "axios";

const coursesAPI = axios.create({
  baseURL: "http://localhost:3030/api/courses",
});

export const getCourses = async () => {
  const response = await coursesAPI.get("/");
  return response.data;
};

export const createCourse = async (course) => {
  const response = await coursesAPI.post("/", course);
  return response.data;
};
