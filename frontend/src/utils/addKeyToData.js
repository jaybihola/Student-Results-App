export const addKeyToData = (data) => {
  return data.map((item) => {
    return { ...item, key: item._id };
  });
};
