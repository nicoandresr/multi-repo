import React, { Component } from 'react';
import AspectRatio from 'js-aspect-ratio';
import styles from './Main.scss';

class Main extends Component {
  render() {
    const aspectRatio = new AspectRatio(4, 3);
    return (
      <div className={styles.mainWrapper}>
        <div className={styles.content}>
          webpack + babel + react
          <span>{aspectRatio.getFullWidth()}</span>
          <span>{aspectRatio.getFullHeight()}</span>
          <span>{window.innerHeight}</span>
          <span>{window.innerWidth}</span>
          <span>{navigator.userAgent}</span>
        </div>
        <a href="buble">buble</a>
      </div>
    );
  }
}

export default Main;

