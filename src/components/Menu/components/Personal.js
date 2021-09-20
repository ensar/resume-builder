import React from "react";
import { Input } from "antd";
import styles from "../menu.module.css";
import { useStateContext } from "../../../context/StateContext";

const Personal = () => {
  const { name, setName, job, setJob, summary, setSummary } = useStateContext();

  const { TextArea } = Input;
  return (
    <>
      <div className={styles.nameBox}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <input
        type="text"
        placeholder="Job Title"
        value={job}
        onChange={(e) => setJob(e.target.value)}
        className={styles.job}
      />
      <TextArea
        placeholder="summary"
        className={styles.sum}
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
    </>
  );
};

export default Personal;
