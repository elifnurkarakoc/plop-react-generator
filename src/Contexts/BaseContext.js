import { createContext, useContext } from "react";

const BaseContext = createContext();

export const BaseProvider = ({ children }) => {
   const values = {}
   return <BaseContext.Provider value={values}>{children}</BaseContext.Provider>;
}

export const useBase = () => useContext(BaseContext);