import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { SideMenu } from "../Components/SideMenu/index.js";

import * as S from "./styles";

export const MainContainer = () => {
  const [selectedKeys, setSelectedKeys] = useState([""]);
  const navigate = useNavigate();

  const onClickMenu = (key) => {
    setSelectedKeys([key]);
    navigate(key);
  };

  return (
    <>
      <S.MainLayout>
        <S.Header>
          <S.Title onClick={() => onClickMenu("")}>Student Web App</S.Title>
        </S.Header>
        <S.OuterContent>
          <S.InnerLayout hasSider={true}>
            <S.Sider>
              <SideMenu
                selectedKey={selectedKeys}
                setSelectedKey={onClickMenu}
              />
            </S.Sider>
            <S.InnerContent>
              <Outlet />
            </S.InnerContent>
          </S.InnerLayout>
        </S.OuterContent>
        <S.Footer>
          Built by Jay Bihola (
          <Link to={"https://github.com/jaybihola/Student-Results-App"}>
            View Source
          </Link>
          )
        </S.Footer>
      </S.MainLayout>
    </>
  );
};
