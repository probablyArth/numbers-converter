import React, { useContext } from "react";
import { valuesContext } from "../../contexts/ValuesContext";

const ValueInput = () => {
  const { setValue } = useContext(valuesContext);
  return (
    <input
      type="text"
      placeholder="Number to convert"
      onChange={(e) => setValue(e.target.value)}
      className={"text-xl px-4 rounded-md py-2 text-black w-full"}
    />
  );
};

export default ValueInput;
