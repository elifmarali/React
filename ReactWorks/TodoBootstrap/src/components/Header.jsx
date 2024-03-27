import React from "react";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
function Header() {
  return (
    <header>
      <h2>
        <AppRegistrationIcon sx={{ width: 50, height: 50 }} />
        Todo App
      </h2>
    </header>
  );
}

export default Header;
