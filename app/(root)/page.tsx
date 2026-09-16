"use client";
import Image from "next/image";

import Link from "next/link";

import styles from "./page.module.css";

import NavBar from "@/components/nav-bar/nav-bar";

import DigitalClock from "@/components/clock/clock";

export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.clockContainer}>
        <DigitalClock />
        <div className={styles.date}>

        </div>
      </div>
      <NavBar />
    </main>
  );
}
