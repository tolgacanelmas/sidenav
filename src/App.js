import React, { useState } from 'react';
import styles from './app.module.css';
import Sidenav from './components/Sidenav';

function App() {
  const [contentHidden , setContentHidden] = useState(false)

  const handleContentHidden = () => {
    setContentHidden(!contentHidden)
  }
  
  return (
    <div className={styles.app}>
      <div className={styles.appinner}>
        <Sidenav handleContentHidden={contentHidden}/>
      </div>
    </div>
  );
}

export default App;
