import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div>
      <GlobalProvider>
        <Navbar />
        <Header />
      </GlobalProvider>
    </div>
  );
}

export default App;
