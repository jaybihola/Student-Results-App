import React from "react";
import { Space, Table } from "antd";
import PropTypes from "prop-types";

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

StudentsTable.propTypes = {
  dataSource: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      familyName: PropTypes.string.isRequired,
      dateOfBirth: PropTypes.string.isRequired,
    })
  ).isRequired,
  pagination: PropTypes.element,
};
