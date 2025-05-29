import { createContext, useState, useContext } from "react";

const TokenContext = createContext();

export function TokenProvider({ children }) {
  const [tokens, setTokens] = useState({
    tokenBootcamp: "",
    tokenELearning: "",
  });

  const setTokenBootcamp = (value) =>
    setTokens((t) => ({ ...t, tokenBootcamp: value }));
  const setTokenELearning = (value) =>
    setTokens((t) => ({ ...t, tokenELearning: value }));

  return (
    <TokenContext.Provider
      value={{ ...tokens, setTokenBootcamp, setTokenELearning }}
    >
      {children}
    </TokenContext.Provider>
  );
}

export function useToken() {
  return useContext(TokenContext);
}
