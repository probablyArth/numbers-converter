import React, { useContext } from "react";
import { valuesContext } from "../../contexts/ValuesContext";

const ValueInput = () => {
  const { setValue } = useContext(valuesContext);
  return (
    <input
      type="number"
      placeholder="Number to convert"
      onChange={(e) => setValue(Number(e.target.value))}
    />
  );
};

export default ValueInput;
