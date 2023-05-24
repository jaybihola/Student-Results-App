import React from "react";
import { List, Space, Typography } from "antd";
import PropTypes from "prop-types";

export const CourseList = ({ dataSource, pagination }) => {
  return (
    <>
      <List
        itemLayout={"vertical"}
        dataSource={dataSource}
        renderItem={(item) => (
          <List.Item>
            <Space direction={"horizontal"}>
              <Typography.Text strong>Course:</Typography.Text>
              <Typography.Text>{item.name}</Typography.Text>
            </Space>
          </List.Item>
        )}
      />
      <Space
        direction={"vertical"}
        style={{ width: `100%`, marginTop: 8 }}
        align={"center"}
      >
        {pagination}
      </Space>
    </>
  );
};

CourseList.propTypes = {
  dataSource: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  pagination: PropTypes.element,
};
