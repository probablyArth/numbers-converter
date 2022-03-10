import ValueInput from "./ValueInput";
import TypeInput from "./TypeInput";

import React, { useContext, useEffect, useState } from "react";
import { convertBro } from "./utils";
import { valuesContext } from "../../contexts/ValuesContext";

const Form = () => {
  const [ans, setAns] = useState([]);

  const { fromType, toType, value, setToType, setFromType } =
    useContext(valuesContext);

  useEffect(() => {
    const answer = convertBro(value, fromType, toType);
    if (answer === "NaN") return setAns(["Enter a valid number"]);
    const ansList = answer.match(/.{1,20}/g);
    setAns(ansList);
  }, [fromType, toType, value]);

  return (
    <div className="flex flex-col justify-between text-2xl bg-gradient-to-r from-purple-600 to-blue px-6 text-white rounded-md">
      <div className="my-3">
        <div className="flex items-center justify-between py-4">
          <span className="mr-4">From</span> <TypeInput setType={setFromType} />
        </div>
        <ValueInput />
      </div>
      <div className="my-3 mb-5">
        <div className="flex items-center justify-between py-4">
          <span className="mr-4">To</span> <TypeInput setType={setToType} />
        </div>
        <span
          className="bg-white px-4 text-black text-xl rounded-md block w-full py-2 break-words overflow-hidden"
          maxLength="20"
        >
          {ans.map((a) => {
            return (
              <>
                {a}
                <br key={a} />
              </>
            );
          })}
        </span>
      </div>
    </div>
  );
};

export default Form;
