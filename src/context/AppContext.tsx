import React, {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

interface AppContextType {
  isAboutOpen: boolean;
  setIsAboutOpen: Dispatch<SetStateAction<boolean>>;
  isGuessingBoxOpen: boolean;
  setIsGuessingBoxOpen: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isGuessingBoxOpen, setIsGuessingBoxOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isAboutOpen,
        setIsAboutOpen,
        isGuessingBoxOpen,
        setIsGuessingBoxOpen,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
