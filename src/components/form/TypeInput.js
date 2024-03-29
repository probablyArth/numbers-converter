import React from "react";

const TypeInput = ({ setType, currType }) => {
  return (
    <select
      name="type"
      id="type"
      onChange={(e) => setType(Number(e.target.value))}
      className="text-lg rounded-md shadow-md text-black px-4 py-2 giga:text-2xl"
      value={currType}
    >
      <option value="10">Decimal</option>
      <option value="2">Binary</option>
      <option value="8">Octal</option>
      <option value="16">Hexadecimal</option>
    </select>
  );
};

export default TypeInput;
