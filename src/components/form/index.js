import FromTypeInput from "./FromTypeInput";
import ToTypeInput from "./ToTypeInput";
import ValueInput from "./ValueInput";

import React, { useContext, useEffect, useState } from "react";
import { convertBro } from "./utils";
import { valuesContext } from "../../contexts/ValuesContext";

const Form = () => {
  const [ans, setAns] = useState("");

  const { fromType, toType, value } = useContext(valuesContext);

  useEffect(() => {
    setAns(convertBro(value, fromType, toType));
  }, [fromType, toType, value]);

  return (
    <div>
      <div>
        <div>
          From: <FromTypeInput />
        </div>
        <ValueInput />
        <div>
          To: <ToTypeInput />
        </div>
      </div>
      {ans}
    </div>
  );
};

export default Form;
