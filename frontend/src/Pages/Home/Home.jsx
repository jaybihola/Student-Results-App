import React from "react";
import { Space, Table, Typography } from "antd";

const { Title, Text } = Typography;

export const Home = () => {
  return (
    <Space direction={"vertical"}>
      <Title>Home</Title>
      <Text>Welcome to the Shyft Labs Student Management Application.</Text>
      <Text>
        This page contains a preview of the most recently modified data. For
        specifics, please use the links on the left side menu.
      </Text>
      <Title level={4}>Recently Added Students</Title>
      <Table></Table>
    </Space>
  );
};
