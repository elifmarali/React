import React, { useContext } from "react";
import AuthContext from "./context/authContext";

function Auth() {
  const { status, login } = useContext(AuthContext);
  return (
    <div>
      <h3>Giris Yaptin Mi?</h3>
      {status ? <p>Ohooooo Coktannn</p> : <p>Hayir</p>}
      <button onClick={login}>
        {status ? <div>Cikis Yap</div> : <div>Giris Yap</div>}
      </button>
    </div>
  );
}

export default Auth;
