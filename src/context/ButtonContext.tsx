import React, { createContext, useState } from "react";

// ----------- Types  -----------

interface ButtonContextProviderProps {
  children: React.ReactNode;
}

export interface ButtonContextProps {
  open: boolean;
  displayOfIndustry: boolean;
  setDisplayOfIndustry: (prop: boolean) => void;
  displayOfLanguage: boolean;
  setDisplayOfLanguage: (prop: boolean) => void;
  setOpen: (prop: boolean) => void;
  filterHandlerCard: string;
  setFilterHandlerCard(card: string): void;
  goToTop: () => void;
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
  displayOfIndustry: false,
  displayOfLanguage: false,
  setDisplayOfIndustry: () => {
    return;
  },
  setDisplayOfLanguage: () => {
    return;
  },
  goToTop: () => {},
});

export const ButtonContextProvider: React.FC<ButtonContextProviderProps> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);

  const [displayOfIndustry, setDisplayOfIndustry] = useState(false);
  const [displayOfLanguage, setDisplayOfLanguage] = useState(false);

  const [filterHandlerCard, setFilterHandlerCard] = useState("All");

  const goToTop = () => {
    return window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const value: ButtonContextProps = {
    open,
    goToTop,
    setOpen,
    filterHandlerCard,
    setFilterHandlerCard,
    displayOfIndustry,
    displayOfLanguage,
    setDisplayOfIndustry,
    setDisplayOfLanguage,
  };

  return (
    <ButtonContext.Provider value={value}>{children}</ButtonContext.Provider>
  );
};
