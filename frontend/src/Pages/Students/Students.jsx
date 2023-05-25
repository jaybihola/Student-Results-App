import React from "react";
import dayjs from "dayjs";
import { Button, Divider, Form, Input, message, Typography } from "antd";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getStudents, createStudent } from "../../api/studentsApi.js";
import { DatePicker } from "antd/lib";
import { StudentsTable } from "../../Components/StudentsTable/index.js";
import { addKeyToData } from "../../utils/addKeyToData.js";
import { colors } from "../../utils/colors.js";

import * as S from "./styles.js";

const { Title } = Typography;

export const Students = () => {
  const queryClient = useQueryClient();
  const { data } = useQuery(["students"], () => getStudents(), {
    enabled: true,
  });

  const { mutate: doCreateStudent } = useMutation(
    (values) => createStudent(values),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("students");
        return message.success("Student added successfully");
      },
    }
  );

  const [form] = Form.useForm();

  const handleCreateStudent = async (values) => {
    const firstName = values.firstName.trim();
    const familyName = values.familyName.trim();
    const dateOfBirth = dayjs(values.dateOfBirth).format("YYYY-MM-DD");
    const curr = new Date();
    const diff = curr.getTime() - new Date(dateOfBirth).getTime();
    const yr = Math.abs(new Date(diff).getFullYear() - 1970);

    if (yr < 10) {
      message.error("Student must be at least 10 years old");
      return;
    }

    doCreateStudent({ firstName, familyName, dateOfBirth });

    form.resetFields();
  };

  return (
    <>
      <S.Container direction={"vertical"} align={"start"}>
        <Title level={2} style={{ color: `${colors.primary}` }}>
          Students
        </Title>
        <Divider />
        <Title level={4}>Add New Student</Title>
        <Form form={form} layout={"inline"} onFinish={handleCreateStudent}>
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
      </S.Container>
      <Divider />
      <Title level={4}>All Students</Title>
      <StudentsTable
        dataSource={data ? addKeyToData(data) : []}
        pagination={false}
      />
    </>
  );
};
