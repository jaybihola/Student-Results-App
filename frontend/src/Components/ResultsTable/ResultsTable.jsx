import React from "react";
import { Table } from "antd";
import PropTypes from "prop-types";

import * as S from "./styles.js";

import { resultsCol } from "./helpers.js";

export const ResultsTable = ({ dataSource, pagination }) => {
  return (
    <>
      <Table columns={resultsCol} dataSource={dataSource} pagination={false} />
      <S.PaginationContainer direction={"vertical"} align={"center"}>
        {pagination}
      </S.PaginationContainer>
    </>
  );
};

ResultsTable.propTypes = {
  dataSource: PropTypes.arrayOf(
    PropTypes.shape({
      course: PropTypes.string.isRequired,
      studentName: PropTypes.string.isRequired,
      result: PropTypes.string.isRequired,
    })
  ).isRequired,
  pagination: PropTypes.element,
};
