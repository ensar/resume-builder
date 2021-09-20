import React from "react";
import styles from "./resumeLeft.module.css";
import {
  FaEnvelope,
  FaMobileAlt,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useStateContext } from "../../../context/StateContext";

const ResumeLeftSide = () => {
  const { profile, city, email, phone, linkedin, skills, languages, color } =
    useStateContext();

  return (
    <div
      className={styles.resumeLeftContainer}
      style={{ backgroundColor: color }}
    >
      {profile && (
        <div className={styles.photo}>
          <img
            alt="profilePicture"
            src={profile}
            width="70"
            height="70"
            style={{ borderRadius: "50%", display: "block", margin: "0 auto" }}
          ></img>
        </div>
      )}
      <div className={styles.personal}>
        {city && (
          <div>
            <FaMapMarkerAlt />
            <span>{city}</span>
          </div>
        )}
        {email && (
          <div>
            <FaEnvelope />
            <span>{email}</span>
          </div>
        )}
        {phone && (
          <div>
            <FaMobileAlt />
            <span>{phone}</span>
          </div>
        )}
        {linkedin && (
          <div>
            <FaLinkedin />
            <span>{linkedin}</span>
          </div>
        )}
      </div>
      {skills.length > 0 && (
        <div className={styles.skills}>
          <h2>SKILLS</h2>
          {skills.map((skill) => (
            <div>{skill}</div>
          ))}
        </div>
      )}
      {languages.length > 0 && (
        <div className={styles.languages}>
          <h2>LANGUAGES</h2>
          {languages.map((language) => (
            <div>{language}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResumeLeftSide;
