import { createContext, useContext, useState, createRef } from "react";
import { useScreenshot } from "use-react-screenshot";

const StateContext = createContext();
export const useStateContext = () => useContext(StateContext);

export const StateProvider = ({ children }) => {
  const [image, takeScreenshot] = useScreenshot();
  const ref = createRef(null);

  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [summary, setSummary] = useState("");

  const [profile, setProfile] = useState();

  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [linkedin, setLinkedin] = useState("");

  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState("");

  const [languages, setLanguages] = useState([]);
  const [language, setLanguage] = useState("");

  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);

  const [color, setColor] = useState("#335384");
  const states = {
    image,
    takeScreenshot,
    ref,
    name,
    setName,
    job,
    setJob,
    summary,
    setSummary,
    profile,
    setProfile,
    city,
    setCity,
    email,
    setEmail,
    phone,
    setPhone,
    linkedin,
    setLinkedin,
    skills,
    setSkills,
    skill,
    setSkill,
    languages,
    setLanguages,
    language,
    setLanguage,
    experience,
    setExperience,
    education,
    setEducation,
    color,
    setColor,
  };
  return (
    <StateContext.Provider value={states}>{children}</StateContext.Provider>
  );
};
