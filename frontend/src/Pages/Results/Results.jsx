import React from "react";
import { Button, Form, message, Select, Space, Typography } from "antd";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createResult, getResults } from "../../api/resultsApi.js";
import { getCourses } from "../../api/coursesApi.js";
import { getStudents } from "../../api/studentsApi.js";
import { convert, scoreOptions } from "./helpers.js";
import { ResultsTable } from "../../Components/ResultsTable/index.js";

const { Title, Text } = Typography;

export const Results = () => {
  const queryClient = useQueryClient();

  const { data: courses } = useQuery(["courses"], () => getCourses(), {
    enabled: true,
  });

  const { data: students } = useQuery(["students"], () => getStudents(), {
    enabled: true,
  });

  const { data } = useQuery(["results"], () => getResults(), {
    enabled: true,
  });

  const { mutate: doCreateResult } = useMutation(
    (values) => createResult(values),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries("results");
        message.success("Result added successfully");
      },
    }
  );

  const [form] = Form.useForm();

  const handleCreateResult = async (values) => {
    console.log("Creating result...");
    const courseId = values.courseId;
    const studentId = values.studentId;
    const score = values.score;
    await doCreateResult({
      courseId: courseId,
      studentId: studentId,
      score: score,
    });
  };

  return (
    <>
      <Space
        direction={"vertical"}
        align={"start"}
        style={{ width: `100%`, marginBottom: 24 }}
      >
        <Title>Results</Title>
        <Form form={form} layout={"horizontal"} onFinish={handleCreateResult}>
          <Form.Item
            label={"Course Name"}
            name={"courseId"}
            required
            rules={[{ required: true, message: "Please select a Course" }]}
          >
            <Select style={{ minWidth: 200 }} options={convert(courses)} />
          </Form.Item>
          <Form.Item
            label={"Student Name"}
            name={"studentId"}
            required
            rules={[{ required: true, message: "Please select a Student" }]}
          >
            <Select style={{ minWidth: 200 }} options={convert(students)} />
          </Form.Item>
          <Form.Item
            label={"Score"}
            name={"score"}
            required
            rules={[{ required: true, message: "Please select a Score" }]}
          >
            <Select style={{ minWidth: 200 }} options={scoreOptions} />
          </Form.Item>
          <Form.Item>
            <Button htmlType={"submit"}>Add Result</Button>
          </Form.Item>
        </Form>
      </Space>
      <ResultsTable dataSource={data || []} />
    </>
  );
};
