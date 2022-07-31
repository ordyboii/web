import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useMemo,
  useState
} from "react";

const languageContext = createContext<{
  english: boolean;
  setEnglish: Dispatch<SetStateAction<boolean>>;
}>({
  english: false,
  setEnglish: () => {}
});

export const LanguageProvider = ({ children }: PropsWithChildren<{}>) => {
  const [english, setEnglish] = useState(false);

  const value = useMemo(() => {
    return { english, setEnglish };
  }, [english]);

  return (
    <languageContext.Provider value={value}>
      {children}
    </languageContext.Provider>
  );
};

export const useLanguage = () => useContext(languageContext);
