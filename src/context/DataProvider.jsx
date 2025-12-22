import { createContext, useContext } from "react";

export const context = createContext();

export function useData() {
    const data = useContext(context);
    if (!data) {
        throw new Error("useData must be used within a DataProvider");
    }
    return data;
}


export function DataProvider({ children }) {


    
  return (
    <context.Provider value={{}}>
      {children}
    </context.Provider>
  );
}