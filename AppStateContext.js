import { createContext, useState } from "react";

export const AppStateContext = createContext();

export const AppStateProvider = (props) => {
  const [position, setPosition] = useState({ x: -180, y: 170 });

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
