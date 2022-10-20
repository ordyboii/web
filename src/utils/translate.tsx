import {
  createContext,
  useContext,
  useMemo,
  useState,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction
} from "react";

type TranslateStore = {
  english: boolean;
  setEnglish: Dispatch<SetStateAction<boolean>>;
};

const TranslateContext = createContext<TranslateStore | null>(null);

export const TranslateProvider = ({ children }: PropsWithChildren) => {
  const [english, setEnglish] = useState(false);

  const store = useMemo(() => {
    return { english, setEnglish };
  }, [english]);

  return (
    <TranslateContext.Provider value={store}>
      {children}
    </TranslateContext.Provider>
  );
};

export const useTranslate = () => {
  const context = useContext(TranslateContext);
  if (context === null) throw Error("Obviously, the context is wrong eh?");
  return context;
};
