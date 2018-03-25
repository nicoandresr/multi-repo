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
          {aspectRatio.getFullWidth()}
          {aspectRatio.getFullHeight()}
          {window.innerHeight}
          {window.innerWidth}
        </div>
        <a href="buble">buble</a>
      </div>
    );
  }
}

export default Main;

