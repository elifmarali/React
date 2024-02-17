import React from "react";
import "../styles/Footer.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FacebookRoundedIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
      <div className="footerText">Tum Haklari Saklidir | Burger Yiyelim</div>
    </div>
  );
}

export default Footer;
