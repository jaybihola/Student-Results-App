import React from "react";
import { Button, Divider, Form, message, Select, Typography } from "antd";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createResult, getResults } from "../../api/resultsApi.js";
import { getCourses } from "../../api/coursesApi.js";
import { getStudents } from "../../api/studentsApi.js";
import { ResultsTable } from "../../Components/ResultsTable/index.js";
import { convert, scoreOptions } from "./helpers.js";

import * as S from "./styles.js";
import { colors } from "../../utils/colors.js";

const { Title } = Typography;

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
        return message.success("Result added successfully");
      },
    }
  );

  const [form] = Form.useForm();

  const handleCreateResult = async (values) => {
    const courseId = values.courseId;
    const studentId = values.studentId;
    const score = values.score;
    await doCreateResult({
      courseId: courseId,
      studentId: studentId,
      score: score,
    });

    form.resetFields();
  };

  return (
    <>
      <S.Container direction={"vertical"} align={"start"}>
        <Title level={2} style={{ color: `${colors.primary}` }}>
          Results
        </Title>
        <Divider />
        <Title level={4}>Add New Result</Title>
        <Form form={form} layout={"inline"} onFinish={handleCreateResult}>
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
      </S.Container>
      <Divider />
      <Title level={4}>All Results</Title>
      <ResultsTable dataSource={data || []} />
    </>
  );
};
