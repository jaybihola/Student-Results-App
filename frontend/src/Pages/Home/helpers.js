export const selectedData = (page, pageSize, data) => {
  if (!data) return [];
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  return data.slice(start, end);
};
