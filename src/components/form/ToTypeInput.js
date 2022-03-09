import React, { useContext } from "react";
import { valuesContext } from "../../contexts/ValuesContext";

const ToInput = () => {
  const { setToType } = useContext(valuesContext);

  return (
    <select
      name="type"
      id="type"
      onChange={(e) => setToType(Number(e.target.value))}
    >
      <option value="10">Decimal</option>
      <option value="8">Octal</option>
      <option value="16">Hexadecimal</option>
    </select>
  );
};

export default ToInput;
