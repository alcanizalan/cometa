"use client";
import Image from "next/image";

import Link from "next/link";

import styles from "./page.module.css";

import { getCurrentTime } from "@/utils/clock";
import { useState, useEffect } from "react";
import NavBar from "@/components/nav-bar/nav-bar";

export default function Home() {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.timer}>
        <span>{time ?? "--:--:--"}</span>
      </div>
      <NavBar />
    </main>
  );
}
