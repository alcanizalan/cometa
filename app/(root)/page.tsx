import Image from "next/image";

import Link from "next/link";

import styles from "./page.module.css";

import HomeHub from "@/components/home/home-hub/home-hub";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.timer}>
        <span>00:00</span>
      </div>
      <Link href="/fish-tank">Fish Tank</Link>
      <Link href="/notes">Notes</Link>

      <HomeHub />
    </main>
  );
}
