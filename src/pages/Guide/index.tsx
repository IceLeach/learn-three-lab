import React from 'react';
import { Link } from 'umi';
import { Typography } from 'antd';
import styles from './index.less';

const Guide: React.FC = () => {
  return (
    <div className={styles.container}>
      <Typography>
        <Typography.Title level={2}>导航</Typography.Title>
        <Typography.Paragraph>
          <ul>
            <li><Link to='/cube'>第一个 3D 场景 & dat.gui 可视化调试</Link></li>
          </ul>
        </Typography.Paragraph>
      </Typography>
    </div>
  );
}

export default Guide;
