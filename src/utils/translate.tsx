import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useMemo,
  useState
} from "react";

const translateContext = createContext<{
  english: boolean;
  setEnglish: Dispatch<SetStateAction<boolean>>;
}>({
  english: false,
  setEnglish: () => {}
});

export const TranslateProvider = (props: PropsWithChildren) => {
  const [english, setEnglish] = useState(false);

  const value = useMemo(() => {
    return { english, setEnglish };
  }, [english]);

  return (
    <translateContext.Provider value={value}>
      {props.children}
    </translateContext.Provider>
  );
};

export function useTranslate() {
  return useContext(translateContext);
}
