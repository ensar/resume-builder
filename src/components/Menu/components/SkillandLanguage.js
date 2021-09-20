import React from "react";
import styles from "../menu.module.css";
import { useStateContext } from "../../../context/StateContext";

const SkillandLanguage = () => {
  const {
    skills,
    setSkills,
    skill,
    setSkill,
    languages,
    setLanguages,
    language,
    setLanguage,
  } = useStateContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[1].innerHTML === "Add Skill") {
      setSkill("");
      {
        skill.trim() && setSkills([...skills, skill]);
      }
    } else {
      setLanguage("");
      {
        language.trim() && setLanguages([...languages, language]);
      }
    }
  };
  return (
    <>
      <div className={styles.skills}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="skill"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
          />
          <button type="submit" className={styles.btn}>
            Add Skill
          </button>
        </form>
      </div>

      <div className={styles.language}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
          <button type="submit" className={styles.btn}>
            Add Language
          </button>
        </form>
      </div>
    </>
  );
};

export default SkillandLanguage;
