import React, { Component } from 'react';
import styles from './Main.scss';

class Main extends Component {
  render() {
    const aspectRatio = new AspectRatio(4, 3);
    return (
      <div className={styles.mainWrapper}>
        <div className={styles.content}>
          webpack + babel + react
        </div>
        <a href="buble">buble</a>
      </div>
    );
  }
}

export default Main;

