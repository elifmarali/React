import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [deger, setDeger] = useState("Elif");
  return (
    <GlobalContext.Provider
      value={{
        deger: deger,
        id: 25,
        basliklar: [
          "Anasayfa",
          "Iletisim",
          "Duyurular",
          "Hakkimizda",
          "Akademik Kadro",
        ],
        setDeger,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
