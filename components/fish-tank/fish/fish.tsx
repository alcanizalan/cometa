import styles from './fish.module.css';

import {useState, useEffect} from 'react';
import { useFishMovement } from '@/lib/fish-life';

export default function Fish() {
  const [position, setPosition] = useState({ x: 100, y: 100 });

  useEffect(() => {
    // start movement and return cleanup from the helper
    return useFishMovement(position.x, position.y, setPosition, 7000);
  }, [7000]);

  return (
    <div className={styles.fish}
    style={{
      transform: `translate(${position.x}px, ${position.y}px)`, transition: 'transform 1.5s ease-in-out'
    }}>

    </div>
  );
}
