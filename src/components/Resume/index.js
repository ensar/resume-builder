import React from "react";
import { useStateContext } from "../../context/StateContext";
import ResumeLeftSide from "../ResumeSections/ResumeLeftSide";
import ResumeRightSide from "../ResumeSections/ResumeRightSide";
import styles from "./resume.module.css";

const Resume = () => {
  const { ref } = useStateContext();
  return (
    <div className={styles.resumeContainer} ref={ref}>
      <ResumeLeftSide />
      <ResumeRightSide />
    </div>
  );
};

export default Resume;
