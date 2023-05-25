import React, { useState } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { SideMenu } from "../Components/SideMenu/index.js";

import * as S from "./styles";

export const MainContainer = () => {
  const [selectedKeys, setSelectedKeys] = useState([""]);

  return (
    <>
      <S.MainLayout>
        <S.Header>Student Web App</S.Header>
        <S.OuterContent>
          <S.InnerLayout hasSider={true}>
            <S.Sider>
              <SideMenu
                selectedKey={selectedKeys}
                setSelectedKey={setSelectedKeys}
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
