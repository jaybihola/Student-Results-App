import React from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router";
import { menuItems } from "./helpers.js";

export const SideMenu = () => {
  const navigate = useNavigate();
  const onClickMenu = (key) => {
    navigate(`/${key}`);
  };

  return (
    <>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={[""]}
        items={menuItems}
        onClick={(e) => onClickMenu(e.key)}
      />
    </>
  );
};
