import { useState, createContext, useContext } from "react";

const localDataContext = createContext();

export const useLocalData = () => {
  return useContext(localDataContext);
};

export const DataProvider = ({ children }) => {
  const [islogin, setIslogin] = useState(localStorage.getItem("isLogin"));

  const localValues = {
    islogin,
    setIslogin,
  };

  return (
    <localDataContext.Provider value={localValues}>
      {children}
    </localDataContext.Provider>
  );
};
