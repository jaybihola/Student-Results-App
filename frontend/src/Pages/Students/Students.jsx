import React from "react";
import dayjs from "dayjs";
import { Button, Form, Input, message, Space, Table, Typography } from "antd";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getStudents, createStudent } from "../../api/studentsApi.js";
import { DatePicker } from "antd/lib";
import { StudentsTable } from "../../Components/StudentsTable/index.js";

const { Title, Text } = Typography;

export const Students = () => {
  const queryClient = useQueryClient();
  const { data, isLoading, isError, error } = useQuery(
    ["students"],
    () => getStudents(),
    { enabled: true }
  );

  const { mutate: doCreateStudent } = useMutation(
    (values) => createStudent(values),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("students");
        message.success("Student added successfully");
      },
    }
  );

  const [form] = Form.useForm();

  const handleAddStudent = async (values) => {
    const firstName = values.firstName;
    const familyName = values.familyName;
    const dateOfBirth = dayjs(values.dateOfBirth).format("YYYY-MM-DD");
    const curr = new Date();
    const diff = curr.getTime() - new Date(dateOfBirth).getTime();
    const yr = Math.abs(new Date(diff).getFullYear() - 1970);

    if (yr < 10) {
      message.error("Student must be at least 10 years old");
      return;
    }

    doCreateStudent({ firstName, familyName, dateOfBirth });
  };

  return (
    <>
      <Space
        direction={"vertical"}
        align={"start"}
        style={{ width: `100%`, marginBottom: 24 }}
      >
        <Title>Students</Title>
        {isLoading && <Text>Loading...</Text>}
        <Form form={form} layout={"horizontal"} onFinish={handleAddStudent}>
          <Form.Item
            label={"First Name"}
            name={"firstName"}
            required
            rules={[{ required: true, message: "Please enter a first name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={"Family Name"}
            name={"familyName"}
            required
            rules={[{ required: true, message: "Please enter a family name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={"Birthday"}
            name={"dateOfBirth"}
            required
            rules={[{ required: true, message: "Please enter a birth date" }]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item>
            <Button htmlType={"submit"}>Add Student</Button>
          </Form.Item>
        </Form>
      </Space>
      <StudentsTable dataSource={data} pagination={false} />
    </>
  );
};
