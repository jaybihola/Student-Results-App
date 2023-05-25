import React from "react";
import { List, Space, Typography } from "antd";
import PropTypes from "prop-types";

import * as S from "./styles.js";

export const CourseList = ({ dataSource, pagination }) => {
  return (
    <>
      <List
        itemLayout={"vertical"}
        dataSource={dataSource}
        renderItem={(item) => (
          <List.Item key={item.name}>
            <Space direction={"horizontal"}>
              <Typography.Text strong>Course:</Typography.Text>
              <Typography.Text>{item.name}</Typography.Text>
            </Space>
          </List.Item>
        )}
      />
      <S.PaginationContainer direction={"vertical"} align={"center"}>
        {pagination}
      </S.PaginationContainer>
    </>
  );
};

CourseList.propTypes = {
  dataSource: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  pagination: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),
};
