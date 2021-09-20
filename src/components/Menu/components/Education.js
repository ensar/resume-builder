import React, { useState } from "react";
import styles from "../menu.module.css";
import { useStateContext } from "../../../context/StateContext";
import { Modal, Form, Input, DatePicker } from "antd";

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  const { RangePicker } = DatePicker;
  return (
    <Modal
      visible={visible}
      title="Add Education"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
      >
        <Form.Item
          name="school"
          label="School Name"
          rules={[
            {
              required: true,
              message: "Please input the school name",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="department"
          label="Department"
          rules={[
            {
              required: true,
              message: "Please input the department",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="date"
          label="Date"
          rules={[
            {
              required: true,
              message: "Please input the date",
            },
          ]}
        >
          <RangePicker />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const Education = () => {
  const [visible, setVisible] = useState(false);

  const { education, setEducation } = useStateContext();

  const onCreate = (values) => {
    setEducation([...education, values]);
    setVisible(false);
  };

  return (
    <div>
      <button
        className={styles.modalBtn}
        onClick={() => {
          setVisible(true);
        }}
      >
        Add Education
      </button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default Education;
