import React, { useContext } from "react";
import { valuesContext } from "../../contexts/ValuesContext";

const ToInput = () => {
  const { setToType } = useContext(valuesContext);

  return (
    <select name="type" id="type" onChange={(e) => setToType(e.target.value)}>
      <option value="arth">Arth</option>
      <option value="anmol">Anmol</option>
      <option value="ash">Ash</option>
    </select>
  );
};

export default ToInput;
