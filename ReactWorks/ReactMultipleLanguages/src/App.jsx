import { useEffect, useState } from "react";
import "./App.css";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";

function App() {
  const defaultLang = localStorage.getItem("lang")
    ? localStorage.getItem("lang")
    : navigator.languages[0];
  const [lang, setLang] = useState(defaultLang ? defaultLang : "TR-tr");

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  console.log(defaultLang);
  const messages = {
    "tr-TR": {
      title: "Merhaba",
      desc: "{count} yeni mesajiniz var",
    },
    "en-US": {
      title: "Hello",
      desc: "You have {count} messages",
    },
  };
  return (
    <>
      <IntlProvider messages={messages[lang]} locale={lang}>
        <FormattedMessage id="title" />
        <br />
        <br />
        <FormattedMessage id="desc" values={{ count: 13 }} />
        <button onClick={() => setLang("tr-TR")}>Turkce</button>
        <button onClick={() => setLang("en-US")}>English</button>
      </IntlProvider>
    </>
  );
}

export default App;
