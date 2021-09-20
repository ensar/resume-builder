import React from "react";
import styles from "./menu.module.css";
import { AiOutlineDownload } from "react-icons/ai";
import { Button, Tooltip } from "antd";
import Contact from "./components/Contact";
import SkillandLanguage from "./components/SkillandLanguage";
import Photo from "./components/Photo";
import Personal from "./components/Personal";
import Experience from "./components/Experience";
import Education from "./components/Education";
import { useStateContext } from "../../context/StateContext";

const Menu = () => {
  const { image, takeScreenshot, ref } = useStateContext();

  const getImage = () => takeScreenshot(ref.current);
  return (
    <div className={styles.container}>
      <Button type="primary" onClick={getImage}>
        Save
      </Button>
      {image && (
        <Tooltip placement="bottom" color="#335384" title="Download Resume">
          <Button
            shape="round"
            icon={<AiOutlineDownload />}
            size="large"
            style={{ background: "#2ecc71", color: "#fff", marginTop: "10px" }}
            href={image}
            download="resume.png"
          ></Button>
        </Tooltip>
      )}
      <Personal />
      <Photo />
      <Contact />
      <SkillandLanguage />
      <Experience />
      <Education />
    </div>
  );
};

export default Menu;
