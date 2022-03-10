import { createContext, useState } from "react";

export const valuesContext = createContext();

const ValuesContextProvider = ({ children }) => {
  const [fromType, setFromType] = useState(2);
  const [toType, setToType] = useState(2);
  const [value, setValue] = useState(0);

  return (
    <valuesContext.Provider
      value={{ fromType, setFromType, toType, setToType, value, setValue }}
    >
      {children}
    </valuesContext.Provider>
  );
};

export default ValuesContextProvider;
