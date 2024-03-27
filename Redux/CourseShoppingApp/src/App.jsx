import "./App.css";
import CourseList from "./components/CourseList";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./redux/Card/CartSlice";
function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <>
      <Navbar />
      <CourseList />
    </>
  );
}

export default App;
