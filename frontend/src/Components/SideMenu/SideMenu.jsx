import React from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router";
import { menuItems } from "./helpers.js";
import PropTypes from "prop-types";

export const SideMenu = ({ selectedKey, setSelectedKey }) => {
  const navigate = useNavigate();
  const onClickMenu = (key) => {
    navigate(`/${key}`);
  };

  return (
    <>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={selectedKey}
        items={menuItems}
        onClick={(e) => {
          onClickMenu(e.key);
          setSelectedKey(e.key);
        }}
        style={{ height: `100%` }}
      />
    </>
  );
};

SideMenu.propTypes = {
  selectedKey: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedKey: PropTypes.func.isRequired,
};
