import React from "react";
import { useStateContext } from "../../../context/StateContext";
import styles from "./resumeRight.module.css";
import moment from "moment";

const ResumeRightSide = () => {
  const { experience, education, name, job, summary } = useStateContext();

  return (
    <div className={styles.resumeRightContainer}>
      {name && <h1>{name}</h1>}
      {job && <h2>{job}</h2>}
      {summary && (
        <div className={styles.summary}>
          <h3>Personal Profile</h3>
          <p>{summary}</p>
        </div>
      )}
      {experience.length > 0 && (
        <div className={styles.experience}>
          <h3>Work Experience</h3>
          {experience.map((work, i) => (
            <React.Fragment key={i}>
              <h4>{work.title}</h4>
              <p>
                {work.brand} |{" "}
                {work.date.map((d) => moment(d._d).format("YYYY/MM/DD  "))}
              </p>
              <li className={styles.description}>{work.description}</li>
            </React.Fragment>
          ))}
        </div>
      )}

      {education.length > 0 && (
        <div>
          <h3>Education</h3>
          {education.map((edu, i) => (
            <React.Fragment key={i}>
              <h4>{edu.school}</h4>
              <p>
                {edu.department} |{" "}
                {edu.date.map((d) => moment(d._d).format("YYYY/MM/DD  "))}
              </p>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResumeRightSide;
