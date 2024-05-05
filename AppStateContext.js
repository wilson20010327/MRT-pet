import { createContext, useState } from "react";

export const AppStateContext = createContext();

export const AppStateProvider = (props) => {
  const [position, setPosition] = useState({ x: 0, y: 200 });

  return (
    <AppStateContext.Provider
      value={{
        position,
        setPosition,
      }}
    >
      {props.children}
    </AppStateContext.Provider>
  );
};
