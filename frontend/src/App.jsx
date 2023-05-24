import React from "react";
import { MainContainer } from "./Container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import { Home, Students, Courses, Results } from "./Pages";

export const colors = {
  primary: "#656176",
  text: "#F3F8F2",
  success: "#A9E5BB",
  warning: "#FCF6B1",
  danger: "#B33951",
  white: "#ffffff",
  black: "#1E1E24",
  lightGray: "rgba(210,210,210,0.37)",
};

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colors.primary,
          colorSuccess: colors.success,
          colorWarning: colors.warning,
          colorError: colors.danger,
          colorText: colors.black,
          colorBgBase: colors.white,
          colorLink: colors.primary,
          borderRadius: 2,
          fontSize: 16,
        },
      }}
    >
      <Router>
        <Routes>
          <Route path={"/"} element={<MainContainer />}>
            <Route index element={<Home />} />
            <Route path="students" element={<Students />} />
            <Route path="courses" element={<Courses />} />
            <Route path="results" element={<Results />} />
          </Route>
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;
