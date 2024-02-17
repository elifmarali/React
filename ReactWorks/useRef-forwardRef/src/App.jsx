import { forwardRef } from "react";
import "./App.css";
import { useRef } from "react";
//ref hooku jsx elemenalarini reflemek icin kullanilir
//forwardRef ise componentleri reflemek icin kullanilir
//forwardRef hooku ref i iletmek icin kullanilir
// yani az once input elementiyle denedigimiz bir Input componenti olsaydi
//bunun iletimi icin  kullanilir

const Input = forwardRef((props, ref) => {
  return <input type="text" {...props} ref={ref} />;
});

function App() {
  const inputFocusOn = useRef();
  const inputFocusOn2 = useRef();

  const focusInput = () => {
    inputFocusOn.current.focus();
    inputFocusOn2.current.value = "elif";
  };
  return (
    <>
      <h2>useRef() - forwardRef()</h2>
      <Input ref={inputFocusOn2} />
      <input type="text" />
      <input type="text" ref={inputFocusOn} />
      <button onClick={focusInput}>Focusla</button>
    </>
  );
}

export default App;
