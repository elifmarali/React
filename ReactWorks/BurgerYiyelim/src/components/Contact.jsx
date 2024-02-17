import React from "react";
import "../styles/Contact.css";
import Image from "../assets/banner.png";
function Contact() {
  return (
    <div className="contact">
      <div className="leftSection">
        <img src={Image} alt="" className="image" />
      </div>
      <div className="rigthSection">
        <h1 className="rigthTitle">Bizimle Iletisime Gecin</h1>
        <form className="contactForm">
          <label className="contactLabel">Ad-Soyad</label>
          <input
            type="text"
            placeholder="Lutfen adinizi soyadinizi giriniz"
            className="contactInput"
          />
          <label className="contactLabel">E-Mail</label>
          <input
            type="text"
            placeholder="Lutfen e-mail giriniz"
            className="contactInput"
          />
          <label className="contactLabel">Mesajiniz</label>
          <textarea
            placeholder="Lutfen adinizi soyadinizi giriniz"
            rows={3}
            className="contactInput"
          />
          <button className="contactButton">Gonder</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
