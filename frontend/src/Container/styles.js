import styled from "styled-components";
import { Layout } from "antd";
import { colors } from "../App.jsx";

export const MainLayout = styled(Layout)`
  min-height: 100vh;
`;

export const Header = styled(Layout.Header)`
  background: ${colors.white};
`;

export const InnerLayout = styled(Layout)`
  background: ${colors.white};
  min-height: 50vh;
`;

export const Sider = styled(Layout.Sider)`
  background: ${colors.white};
`;

export const OuterContent = styled(Layout.Content)`
  margin: 40px;
`;

export const InnerContent = styled(Layout.Content)`
  padding: 30px;
`;

export const Footer = styled(Layout.Footer)`
  text-align: center;
`;
