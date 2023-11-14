import React, { useState } from "react";

function Button({ onLogin }) {
  const [login, setLogin] = useState(false);
  const handleClick = () => {
    setLogin(!login);
    onLogin(!login);
  };
  return (
    <div>
      <button onClick={handleClick}>Giris Yap</button>
    </div>
  );
}

export default Button;
