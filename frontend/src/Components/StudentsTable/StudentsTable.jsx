import React from "react";
import { Space, Table } from "antd";
import { studentCols } from "./helpers.jsx";

export const StudentsTable = ({ dataSource, pagination }) => {
  return (
    <>
      <Table columns={studentCols} dataSource={dataSource} pagination={false} />
      <Space
        direction={"vertical"}
        align={"center"}
        style={{ width: `100%`, marginTop: 8 }}
      >
        {pagination}
      </Space>
    </>
  );
};
