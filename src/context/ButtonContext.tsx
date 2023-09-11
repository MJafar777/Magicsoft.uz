import React, { createContext, useState } from "react";

// ----------- Types  -----------

interface ButtonContextProviderProps {
  children: React.ReactNode;
}

export interface ButtonContextProps {
  open: boolean;
  setOpen: (prop: boolean) => void;
  filterHandlerCard: string;
  setFilterHandlerCard(card: string): void;
}

export const ButtonContext = createContext<ButtonContextProps>({
  open: false,
  filterHandlerCard: "All",
  setOpen: () => {
    return;
  },
  setFilterHandlerCard: () => {
    return;
  },
});

export const ButtonContextProvider: React.FC<ButtonContextProviderProps> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);

  const [filterHandlerCard, setFilterHandlerCard] = useState("All");

  const value: ButtonContextProps = {
    open,
    setOpen,
    filterHandlerCard,
    setFilterHandlerCard,
  };

  return (
    <ButtonContext.Provider value={value}>{children}</ButtonContext.Provider>
  );
};
