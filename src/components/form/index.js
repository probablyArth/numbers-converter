import FromTypeInput from "./FromTypeInput";
import ToTypeInput from "./ToTypeInput";
import ValueInput from "./ValueInput";

import React from "react";

const Form = () => {
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
    </div>
  );
};

export default Form;
