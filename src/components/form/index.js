import ValueInput from "./ValueInput";
import TypeInput from "./TypeInput";

import React, { useContext, useEffect, useState } from "react";
import { convertBro } from "./utils";
import { valuesContext } from "../../contexts/ValuesContext";

const Form = () => {
  const [ans, setAns] = useState("");

  const { fromType, toType, value, setToType, setFromType } =
    useContext(valuesContext);

  useEffect(() => {
    const answers = convertBro(value, fromType, toType);
    const ansList = answers.match(/.{1,20}/g);
    console.log(ansList);
    setAns(ansList);
  }, [fromType, toType, value]);

  return (
    <div className="flex flex-col h-2/3 justify-between text-2xl bg-blue px-6 text-white rounded-md">
      <div className="my-4">
        <div className="flex items-center justify-between py-2">
          <span className="mr-4">From</span> <TypeInput setType={setFromType} />
        </div>
        <ValueInput />
      </div>
      <div className="my-4">
        <div className="flex items-center justify-between py-2">
          <span className="mr-4">To</span> <TypeInput setType={setToType} />
        </div>
        <span
          className="bg-white px-4 text-black text-xl rounded-md block w-full py-2 break-words overflow-hidden"
          maxlength="20"
        >
          {ans.map((a) => {
            return (
              <>
                {a}
                <br />
              </>
            );
          })}
        </span>
      </div>
    </div>
  );
};

export default Form;
