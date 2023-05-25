import styled from "styled-components";
import { Layout } from "antd";
import { colors } from "../utils/colors.js";
import { device } from "../utils/devices.js";

export const MainLayout = styled(Layout)`
  min-height: 100vh;
`;

export const Header = styled(Layout.Header)`
  background: ${colors.darkBackground};
  text-align: center;
`;

export const Title = styled.h1`
  color: ${colors.text};
  font-weight: 700;
  cursor: pointer;
  margin: 0;
`;

export const InnerLayout = styled(Layout)`
  background: ${colors.white};
  min-height: 50vh;
`;

export const Sider = styled(Layout.Sider)`
  background-color: ${colors.white};
`;

export const OuterContent = styled(Layout.Content)`
  @media (${device.mobileS}) {
    margin: 3vh 3vw;
  }

  @media (${device.mobileM}) {
    margin: 4vh 4vw;
  }

  @media (${device.tablet}) {
    margin: 4vh 4vw;
    padding: 30px;
  }

  @media (${device.desktopL}) {
    margin: 5vh 5vw;
    padding: 30px;
  }
`;

export const InnerContent = styled(Layout.Content)`
  padding: 30px;
`;

export const Footer = styled(Layout.Footer)`
  text-align: center;
`;
