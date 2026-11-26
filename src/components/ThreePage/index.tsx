import React from 'react';
import styles from './index.less';

interface ThreePageProps {
  ref: React.RefObject<HTMLDivElement | null>
}

const ThreePage: React.FC<ThreePageProps> = (props) => {
  const { ref } = props;

  return (
    <div ref={ref} className={styles.container} />
  );
}

export default ThreePage;
