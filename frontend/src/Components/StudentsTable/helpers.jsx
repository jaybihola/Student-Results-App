import React from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export const studentCols = [
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "Family Name",
    dataIndex: "familyName",
    key: "familyName",
  },
  {
    title: "Date of Birth",
    dataIndex: "dateOfBirth",
    key: "dateOfBirth",
    render: (dob) => dayjs(dob).utc().format("DD/MM/YYYY"),
  },
];
