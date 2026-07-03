"use client"

import styles from './page.module.css';

import Fish from '@/components/fish-tank/fish/fish';

export default function FishTank() {


  return (
    <main>
        <div className={styles.sectionFishes}>
            <h1>Fish Tank</h1>
            <Fish />
        </div>
        <div className={styles.sectionButtons}>

        </div>
    </main>
  );
}
