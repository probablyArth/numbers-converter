import React, { useContext } from "react";
import { valuesContext } from "../../contexts/ValuesContext";

const FromInput = () => {
  const { setFromType } = useContext(valuesContext);

  return (
    <select name="type" id="type" onChange={(e) => setFromType(e.target.value)}>
      <option value="arth">Arth</option>
      <option value="anmol">Anmol</option>
      <option value="ash">Ash</option>
    </select>
  );
};

export default FromInput;
