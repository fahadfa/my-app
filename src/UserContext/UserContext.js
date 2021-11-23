import React, { useContext, useState } from "react";

export const UserContext = React.createContext({
  products: [بلحه],
  changeProducts: () => {},
});

export const UserContextProvider = ({ children }) => {
  const userContext = useContext(UserContext);
  const [products, setproducts] = useState(userContext.products);
  const changeProducts = async (prod) => {
    setproducts([...products, prod]);
  };

  const provider = {
    products,
    changeProducts,
  };
  return (
    <UserContext.Provider value={provider}>{children}</UserContext.Provider>
  );
};

// export const UserContext = React.createContext({
//   cardCount: 0,
//   setCardCount: =);
