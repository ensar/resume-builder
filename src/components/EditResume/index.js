import React from "react";
import { TwitterPicker } from "react-color";
import { useStateContext } from "../../context/StateContext";
import styles from "./editResume.module.css";
import { Select } from "antd";

const EditResume = () => {
  const { color, setColor } = useStateContext();
  const { Option } = Select;

  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };

  function onChange(value) {
    document.body.style.fontFamily = value;
  }

  return (
    <div className={styles.editContainer}>
      <span>Background Color</span>
      <TwitterPicker
        color={color}
        onChangeComplete={handleChangeComplete}
        triangle="hide"
        width="80%"
      />
      <Select
        showSearch
        style={{ width: "80%", marginTop: "40px" }}
        placeholder="Select a font"
        optionFilterProp="children"
        onChange={onChange}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="Arial">Arial</Option>
        <Option value="Roboto">Roboto</Option>
        <Option value="Helvetica">Helvetica</Option>
        <Option value="Courier">Courier</Option>
        <Option value="Tahoma">Tahoma</Option>
      </Select>
    </div>
  );
};

export default EditResume;
