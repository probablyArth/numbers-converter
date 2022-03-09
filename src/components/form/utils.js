// const decimalToOctal = (decimal) => {
//   return decimal.toString(8);
// };

export const convertBro = (number, from, to) => {
  const string = number.toString(from);
  return parseInt(string, to);
};
