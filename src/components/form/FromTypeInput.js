import React, { useContext } from "react";
import { valuesContext } from "../../contexts/ValuesContext";

const FromInput = () => {
  const { setFromType } = useContext(valuesContext);

  return (
    <select
      name="type"
      id="type"
      onChange={(e) => setFromType(Number(e.target.value))}
    >
      <option value="10">Decimal</option>
      <option value="8">Octal</option>
      <option value="16">Hexadecimal</option>
    </select>
  );
};

export default FromInput;
