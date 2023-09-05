import React, { createContext, useState } from "react";

// ----------- Types  -----------

interface ButtonContextProviderProps {
  children: React.ReactNode;
}

export interface ButtonContextProps {
  open: boolean;
  setOpen: (prop: boolean) => void;
}

export const ButtonContext = createContext<ButtonContextProps>({
  open: false,
  setOpen: () => {
    return;
  },
});

export const ButtonContextProvider: React.FC<ButtonContextProviderProps> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);

  const value: ButtonContextProps = { open, setOpen };

  return (
    <ButtonContext.Provider value={value}>{children}</ButtonContext.Provider>
  );
};
