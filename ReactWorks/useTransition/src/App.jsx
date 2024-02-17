import { useState, useTransition } from "react";

import "./App.css";

//oncelik soz konusu olmayan ve bekleme suresine mâl olan durumlarda sonraya atilacak durumu startTransition fonksiyonuna atariz

function App() {
  const [isPending, startTransition] = useTransition();
  const [inputValue, setInputValue] = useState("");
  const [myArray, setMyArray] = useState([]);
  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
    startTransition(() => {
      let myList = [];
      for (let i = 0; i < 2000; i++) {
        myList.push(e.target.value);
      }
      setMyArray(myList);
    });
  };
  return (
    <>
      <input type="text" value={inputValue} onChange={handleChangeInput} />
      {isPending ? (
        <div>Loading...</div>
      ) : (
        <>
          {myArray.map((arrItem, index) => {
            return <div key={index}>{arrItem}</div>;
          })}
        </>
      )}
    </>
  );
}

export default App;
