import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { Layout } from "antd";
import { SideMenu } from "../Components/SideMenu/index.js";
import { colors } from "../App.jsx";

export const MainContainer = () => {
  return (
    <>
      <Layout style={{ minHeight: `100vh` }}>
        <Layout.Header style={{ background: colors.white }}>
          Student Web App
        </Layout.Header>
        <Layout.Content style={{ margin: 45 }}>
          <Layout
            hasSider={true}
            style={{ background: colors.white, minHeight: `50vh` }}
          >
            <Layout.Sider style={{ background: colors.white, padding: 30 }}>
              <SideMenu />
            </Layout.Sider>
            <Layout.Content style={{ padding: 30 }}>
              <Outlet />
            </Layout.Content>
          </Layout>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: `center` }}>
          Built by Jay Bihola <Link>View Source</Link>
        </Layout.Footer>
      </Layout>
    </>
  );
};
