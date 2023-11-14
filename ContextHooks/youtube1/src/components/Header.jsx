import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
function Header() {
  const { id, deger, setDeger } = useContext(GlobalContext);
  const handleClick = () => {
    setDeger("Elif Marali");
  };
  return (
    <div>
      <h2>
        {id} Context'ten gelen veri: {deger}{" "}
      </h2>
      <button onClick={handleClick}>Degistir</button>
    </div>
  );
}

export default Header;
