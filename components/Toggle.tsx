// components/OrientationToggle.js
import React, { useState } from 'react';
import styles from '../styles/Toggle.module.css';

const OrientationToggle = () => {
  const [isPortrait, setIsPortrait] = useState(true);

  const handleToggleOrientation = () => {
    setIsPortrait(!isPortrait);
  };

  return (
    <div className={styles.toggleContainer}>
      <button onClick={handleToggleOrientation}>Toggle Orientation</button>
      <div className={`${styles.content} ${isPortrait ? styles.portrait : styles.landscape} bg-black text-white`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit earum nisi nesciunt. Ipsam, reprehenderit maxime beatae unde accusantium asperiores nesciunt reiciendis quam similique perferendis deserunt iure dicta incidunt minus quas cum fugit eius veniam totam mollitia dolorum natus sed. Repudiandae, odit optio rem obcaecati praesentium nulla possimus perferendis maxime qui, tempora dolor vero, beatae natus quae sequi laborum eveniet molestias. Doloribus nemo quod voluptas enim rem reprehenderit nisi eveniet et, quia 
      </div>
    </div>
  );
};

export default OrientationToggle;
