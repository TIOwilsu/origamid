import React from "react";

const GlobalContext = React.createContext();

const GlobalStorage = ({ children }) => {
  const [products, setProducts] = React.useState([]);
  const content = {
    products,
    setProducts,
  };
  return (
    <GlobalContext.Provider value={content}>{children}</GlobalContext.Provider>
  );
};

export { GlobalStorage, GlobalContext };
