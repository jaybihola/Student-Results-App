import React from "react";
import { Space, Table } from "antd";
import { resultsCol } from "./helpers.js";

export const ResultsTable = ({ dataSource, pagination }) => {
  return (
    <>
      <Table columns={resultsCol} dataSource={dataSource} pagination={false} />
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
