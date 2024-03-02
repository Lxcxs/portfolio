import React, { createContext, useState } from "react";

type ILang= {
  lang: boolean;
  setLang: React.Dispatch<React.SetStateAction<true | false>>; // Ajustado o tipo de retorno para string
}

export const LangContext = createContext<ILang>({
  lang: false,
  setLang: () => {}, // Retornando o valor inicial da linguagem
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LangProvider = ({ children }: React.ReactNode | any) => {
  const [lang, setLang] = useState<true | false>(Boolean);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export default LangProvider;
