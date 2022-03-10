// const decimalToOctal = (decimal) => {
//   return decimal.toString(8);
// };

export const convertBro = (number, from, to) => {
  console.log(number);
  const num = parseInt(number, from);
  console.log(num);
  return num.toString(to);
};
