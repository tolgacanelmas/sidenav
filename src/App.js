import React from 'react';
import styles from './app.module.css';
import Sidenav from './components/Sidenav';

function App() {

  return (
    <div className={styles.app}>
      <Sidenav />
    </div>
  );
}

export default App;
