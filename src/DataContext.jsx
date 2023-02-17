import { useState, createContext, useContext } from "react";

const localDataContext = createContext();

export const useLocalData = () => {
  return useContext(localDataContext);
};

export const DataProvider = ({ children }) => {
  const [islogin, setIslogin] = useState(localStorage.getItem("isLogin"));
  const [isClicked, setIsClicked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [playerName, setPlayerName] = useState("");

  const localValues = {
    islogin,
    setIslogin,
    isClicked,
    setIsClicked,
    inputValue,
    setInputValue,
    playerName,
    setPlayerName,
  };

  return (
    <localDataContext.Provider value={localValues}>
      {children}
    </localDataContext.Provider>
  );
};
