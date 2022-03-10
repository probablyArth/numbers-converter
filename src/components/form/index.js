import ValueInput from "./ValueInput";
import TypeInput from "./TypeInput";

import React, { useContext, useEffect, useState } from "react";
import { convertBro } from "./utils";
import { valuesContext } from "../../contexts/ValuesContext";
import { themeContext } from "../../contexts/ThemeContext";
import { dark, light } from "../../utils/themeStyles";

const Form = () => {
  const [ans, setAns] = useState([]);
  const [themeStyle, setThemeStyle] = useState(dark);

  const { fromType, toType, value, setToType, setFromType } =
    useContext(valuesContext);

  const { theme } = useContext(themeContext);

  useEffect(() => {
    const answer = convertBro(value, fromType, toType);
    if (answer === "NaN") return setAns(["Enter a valid number"]);
    const ansList = answer.match(/.{1,20}/g);
    setAns(ansList);
  }, [fromType, toType, value]);

  useEffect(() => {
    if (theme === "dark") return setThemeStyle(dark);
    setThemeStyle(light);
  }, [theme]);

  return (
    <div
      className={`flex flex-col justify-between text-2xl text-white rounded-md px-4 ${themeStyle.grad} shadow-lg`}
    >
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
          className="bg-white px-4 text-black text-xl rounded-md block py-2 break-words overflow-hidden from-purple-600 to-blue"
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
