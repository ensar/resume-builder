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
      title="Add Experience"
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
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: "Please input the title",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="brand"
          label="Brand Name"
          rules={[
            {
              required: true,
              message: "Please input the brand name",
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

        <Form.Item name="description" label="Description">
          <Input type="textarea" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const Experience = () => {
  const [visible, setVisible] = useState(false);

  const { experience, setExperience } = useStateContext();

  const onCreate = (values) => {
    setExperience([...experience, values]);
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
        Add Experience
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

export default Experience;
