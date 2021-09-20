import React from "react";
import { useStateContext } from "../../../context/StateContext";
import styles from "../menu.module.css";

const Contact = () => {
  const {
    city,
    setCity,
    email,
    setEmail,
    phone,
    setPhone,
    linkedin,
    setLinkedin,
  } = useStateContext();

  return (
    <div className={styles.contact}>
      <div className={styles.menuBox}>
        <input
          type="text"
          placeholder="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className={styles.menuBox}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.menuBox}>
        <input
          type="number"
          placeholder="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className={styles.menuBox}>
        <input
          type="text"
          placeholder="linkedin"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Contact;
