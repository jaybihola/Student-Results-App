import dayjs from "dayjs";

export const studentCols = [
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
    render: (text) => <a>{text}</a>,
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
    render: (dob) => dayjs(dob).format("DD/MM/YYYY"),
  },
];
