import React from "react";
import { Button, Form, Input, message, Typography } from "antd";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createCourse, getCourses } from "../../api/coursesApi.js";
import { CourseList } from "../../Components/CourseList/CourseList.jsx";

import * as S from "./styles.js";

const { Title } = Typography;

export const Courses = () => {
  const queryClient = useQueryClient();
  const [form] = Form.useForm();

  const { data } = useQuery(["courses"], () => getCourses(), {
    enabled: true,
    onSuccess: (data) => console.log(data),
  });

  const { mutate: doCreateCourse } = useMutation(
    (values) => createCourse(values),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries("courses");
        return message.success("Course added successfully");
      },
    }
  );

  const handleCreateCourse = async (values) => {
    const courseName = values.courseName;
    doCreateCourse({ name: courseName });

    form.resetFields();
  };

  return (
    <>
      <S.Container direction={"vertical"} align={"start"}>
        <Title>Courses</Title>
        <Form form={form} layout={"inline"} onFinish={handleCreateCourse}>
          <Form.Item
            label={"Course Name"}
            name={"courseName"}
            required
            rules={[{ required: true, message: "Please enter a Course name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button htmlType={"submit"}>Add Course</Button>
          </Form.Item>
        </Form>
      </S.Container>
      <CourseList dataSource={data || []} />
    </>
  );
};
