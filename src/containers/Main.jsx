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
          <div>{aspectRatio.getFullWidth()}</div>
          <div>{aspectRatio.getFullHeight()}</div>
          <div>{window.innerHeight}</div>
          <div>{window.innerWidth}</div>
          <div>{navigator.userAgent}</div>
          <div>{typeof window.orientation !== 'undefined' ? 'mobile' : 'desktop'}</div>
          <div>{navigator.userAgent.match(/iphone|android/) ? 'mobile' : 'desktop'}</div>
        </div>
        <a href="buble">buble</a>
      </div>
    );
  }
}

export default Main;

