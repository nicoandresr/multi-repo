import React, { Component } from 'react';
import styles from './Main.scss';

class Main extends Component {
  render() {
    return (
      <div className={styles.mainWrapper}>
        <div className={styles.content}>
          Hola mundo
        </div>
      </div>
    );
  }
}

export default Main;

