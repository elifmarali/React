import React from "react";

function Footer() {
  const nowYaer = new Date();
  return <footer>Copyright {nowYaer.getFullYear()} | Elif Marali</footer>;
}

export default Footer;
