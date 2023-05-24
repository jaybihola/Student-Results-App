import React from "react";
import { Pagination, Space, Table, Typography } from "antd";
import { StudentsTable } from "../../Components/StudentsTable/index.js";
import { useQuery } from "@tanstack/react-query";
import { getStudents } from "../../api/studentsApi.js";

const { Title, Text } = Typography;

export const Home = () => {
  const [pageSize, setPageSize] = React.useState(5);
  const [page, setPage] = React.useState(1);

  const { data, isLoading, isError, error } = useQuery(
    ["students"],
    () => getStudents(),
    { enabled: true, onSuccess: (data) => console.log(data) }
  );

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
        dataSource={selectedData(page, pageSize, data)}
        pagination={
          <Pagination
            total={data ? data.length : 0}
            onChange={(page, pageSize) => {
              setPage(page);
              setPageSize(pageSize);
            }}
            pageSize={pageSize}
            current={page}
            simple={true}
          />
        }
      />
      <Title level={4}>Courses</Title>
      <Title level={4}>Results</Title>
    </Space>
  );
};
