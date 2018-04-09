import React, { Component } from 'react';
import styles from './Main.scss';

class Main extends Component {
  render() {
    return (
      <div className={styles.mainWrapper}>
        <div className={styles.content}>
          webpack + babel + preact
        </div>
        <a href="buble">buble</a>
        <a href="apprun/dist">apprun test</a>
      </div>
    );
  }
}

export default Main;

