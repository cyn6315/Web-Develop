import React, { useState } from 'react';

import { Card, Table, Button } from 'antd';
import NewToken from './newToken';

const data = [
  {
    key: '1',
    name: '秋游',
    type: '游玩',
    num: 10,
    createTime: '2020/11/22 11:23:02',
  },
  {
    key: '2',
    name: '冬奥会志愿者',
    type: '公益志愿者',
    num: 9,
    createTime: '2020/11/02 9:00:00',
  },
  {
    key: '3',
    name: '人工智能学术交流大会',
    type: '学业探讨',
    num: 10,
    createTime: '2020/9/5 08:10:40',
  },
];

const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '类别',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '人数',
    dataIndex: 'num',
    key: 'num',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    render: record => (
      <div>
        <a style={{ marginRight: '10px' }}>删除</a>
        <a>详情</a>
      </div>
    ),
  },
];

const Token = props => {
  const [createToken, setCreateToken] = useState(false);
  return (
    <div>
      <Card
        title="召集令列表"
        extra={
          <Button type="primary" onClick={() => setCreateToken(true)}>
            新建召集令
          </Button>
        }
      >
        <Table dataSource={data} columns={columns}></Table>
      </Card>
      {createToken && <NewToken setCreateToken={setCreateToken} />}
    </div>
  );
};
export default Token;
