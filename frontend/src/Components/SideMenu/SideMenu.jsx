import React from "react";
import { Menu } from "antd";
import { menuItems } from "./helpers.js";
import PropTypes from "prop-types";

export const SideMenu = ({ selectedKey, setSelectedKey }) => {
  return (
    <>
      <Menu
        theme="light"
        mode="inline"
        items={menuItems}
        selectedKeys={selectedKey}
        onClick={(e) => {
          setSelectedKey(e.key);
        }}
        style={{ height: `100%`, padding: 8 }}
      />
    </>
  );
};

SideMenu.propTypes = {
  selectedKey: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedKey: PropTypes.func.isRequired,
};
