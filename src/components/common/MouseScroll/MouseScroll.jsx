import React from 'react';
import styles from './MouseScroll.module.scss';
import classNames from 'classnames';
import { pageScroller } from '../../../utils';

const MouseScroll = () => {
  return (
    <div
      className={styles.mouseScroll}
      onClick={() => pageScroller('about', -70)}
    >
      <div className={styles.mouse}>
        <div className={styles.wheel}></div>
      </div>
      <div>
        <span className={classNames(styles.mScrollArrows, styles.one)}></span>
        <span className={classNames(styles.mScrollArrows, styles.two)}></span>
        <span className={classNames(styles.mScrollArrows, styles.three)}></span>
      </div>
    </div>
  );
};

export default MouseScroll;
