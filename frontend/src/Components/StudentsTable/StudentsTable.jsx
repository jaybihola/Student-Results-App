import React from "react";
import { Table } from "antd";
import PropTypes from "prop-types";

import * as S from "./styles.js";

import { studentCols } from "./helpers.jsx";

export const StudentsTable = ({ dataSource, pagination }) => {
  return (
    <>
      <Table columns={studentCols} dataSource={dataSource} pagination={false} />
      <S.PaginationContainer direction={"vertical"} align={"center"}>
        {pagination}
      </S.PaginationContainer>
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
