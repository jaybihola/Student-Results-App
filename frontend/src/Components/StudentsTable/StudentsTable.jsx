import React from "react";
import { Space, Table } from "antd";
import { studentCols } from "../../Pages/Students/helpers.jsx";

export const StudentsTable = ({ dataSource, pagination }) => {
  return (
    <>
      <Table columns={studentCols} dataSource={dataSource} pagination={false} />
      <Space direction={"vertical"} align={"center"} style={{ width: `100%` }}>
        {pagination}
      </Space>
    </>
  );
};
