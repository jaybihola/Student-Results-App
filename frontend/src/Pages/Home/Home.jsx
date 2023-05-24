import React, { useState } from "react";
import { Pagination, Space, Table, Typography } from "antd";
import { StudentsTable } from "../../Components/StudentsTable/index.js";
import { useQuery } from "@tanstack/react-query";
import { getStudents } from "../../api/studentsApi.js";
import { CourseList } from "../../Components/CourseList/CourseList.jsx";
import { getCourses } from "../../api/coursesApi.js";

const { Title, Text } = Typography;

export const Home = () => {
  const [pageSize, setPageSize] = useState(3);
  const [studentPage, setStudentPage] = useState(1);
  const [coursePage, setCoursePage] = useState(1);

  const { data: studentData } = useQuery(["students"], () => getStudents(), {
    enabled: true,
    onSuccess: (data) => console.log(data),
  });

  const { data: courseData } = useQuery(["courses"], () => getCourses(), {
    enabled: true,
    onSuccess: (data) => console.log(data),
  });

  const selectedData = (page, pageSize, data) => {
    if (!data) return [];
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return data.slice(start, end);
  };

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
    </Space>
  );
};
