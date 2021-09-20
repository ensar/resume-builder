import React, { useRef } from "react";
import styles from "../menu.module.css";
import { FaFileUpload } from "react-icons/fa";
import { Tooltip } from "antd";
import { useStateContext } from "../../../context/StateContext";

const Photo = () => {
  const { setProfile } = useStateContext();

  const inputRef = useRef();

  const addPhoto = () => {
    const file = inputRef.current.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setProfile(reader.result);
    });
    reader.readAsDataURL(file);
  };

  return (
    <div className={styles.profilepic}>
      <label>
        Add Photo
        <Tooltip color="#335384" title="Add Photo">
          <span>
            <FaFileUpload />
          </span>
        </Tooltip>
        <input
          type="file"
          className={styles.file}
          ref={inputRef}
          onChange={addPhoto}
        />
      </label>
    </div>
  );
};

export default Photo;
