import React, { useState } from "react";
import { Pagination, Space, Typography } from "antd";
import { StudentsTable } from "../../Components/StudentsTable/index.js";
import { useQuery } from "@tanstack/react-query";
import { getStudents } from "../../api/studentsApi.js";
import { CourseList } from "../../Components/CourseList/CourseList.jsx";
import { getCourses } from "../../api/coursesApi.js";
import { ResultsTable } from "../../Components/ResultsTable/index.js";
import { selectedData } from "./helpers.js";

const { Title, Text } = Typography;

export const Home = () => {
  const [pageSize, setPageSize] = useState(3);
  const [studentPage, setStudentPage] = useState(1);
  const [coursePage, setCoursePage] = useState(1);
  const [resultsPage, setResultsPage] = useState(1);

  const { data: studentData } = useQuery(["students"], () => getStudents(), {
    enabled: true,
  });

  const { data: courseData } = useQuery(["courses"], () => getCourses(), {
    enabled: true,
  });

  const { data: resultsData } = useQuery(["results"], () => getResults(), {
    enabled: true,
  });

  return (
    <Space direction={"vertical"}>
      <Title>Home</Title>
      <Text>Welcome to the Shyft Labs Student Management Application.</Text>
      <Text>
        This page contains a preview of the students, courses and results. To
        add more students, courses or results, please navigate to the respective
        pages.
      </Text>
      <Title level={4}>Students</Title>
      <StudentsTable
        dataSource={selectedData(studentPage, pageSize, studentData)}
        pagination={
          <Pagination
            total={studentData ? studentData.length : 0}
            onChange={(studentPage, pageSize) => {
              setStudentPage(studentPage);
              setPageSize(pageSize);
            }}
            pageSize={pageSize}
            current={studentPage}
            simple={true}
          />
        }
      />
      <Title level={4}>Courses</Title>
      <CourseList
        dataSource={selectedData(coursePage, pageSize, courseData)}
        pagination={
          <Pagination
            total={courseData ? courseData.length : 0}
            onChange={(coursePage, pageSize) => {
              setCoursePage(coursePage);
              setPageSize(pageSize);
            }}
            pageSize={pageSize}
            current={coursePage}
            simple={true}
          />
        }
      />
      <Title level={4}>Results</Title>
      <ResultsTable
        dataSource={selectedData(resultsPage, pageSize, resultsData)}
        pagination={
          <Pagination
            total={resultsData ? resultsData.length : 0}
            onChange={(resultsPage, pageSize) => {
              setResultsPage(resultsPage);
              setPageSize(pageSize);
            }}
            pageSize={pageSize}
            current={resultsPage}
            simple={true}
          />
        }
      />
    </Space>
  );
};
