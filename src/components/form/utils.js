export const convertBro = (number, from, to) => {
  const num = parseInt(number, from);
  return num.toString(to);
};
