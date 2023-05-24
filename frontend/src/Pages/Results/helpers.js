export const scoreOptions = [
  { value: "A", label: "A" },
  { value: "B", label: "B" },
  { value: "C", label: "C" },
  { value: "D", label: "D" },
  { value: "E", label: "E" },
  { value: "F", label: "F" },
];

export const convert = (values) => {
  if (!values) return [];
  return values.map((value) => {
    return {
      label: value.firstName
        ? value.firstName + " " + value.familyName
        : value.name,
      value: value._id,
    };
  });
};
