import React, { useState } from 'react';
import { Modal, Form, Input } from 'antd';

const NewToken = props => {
  const { setCreateToken } = props;
  const [form] = Form.useForm();

  return (
    <Modal
      centered
      onOk={() => setCreateToken(false)}
      onCancel={() => setCreateToken(false)}
    >
      <Form form={form}>
        <Form.Item
          label="项目名称"
          rules={[{ required: true, message: '请输入项目名称' }]}
        >
          <Input placeholder="请输入项目名称" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default NewToken;
