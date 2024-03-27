import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./redux/featurs/counter/counterSlice";
import { useEffect } from "react";
import { getCountry } from "./redux/featurs/country/countrySlice";

function App() {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state.counter);
  const { country, loading } = useSelector((state) => state.country);
  console.log(country);

  useEffect(() => {
    dispatch(getCountry());
  }, []);
  return (
    <>
      <span onClick={() => dispatch(decrement())}>-</span>
      <span>{counter}</span>
      <span onClick={() => dispatch(increment())}>+</span>

      <div>
        {loading ? (
          <div>Yukleniyor ...</div>
        ) : (
          country.map((countryItem, index) => {
            return <div key={index}>{countryItem.region}</div>;
          })
        )}
      </div>
    </>
  );
}

export default App;
