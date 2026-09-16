"use client";
import NavBar from "@/components/nav-bar/nav-bar";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

const WORK_TIME = 5; //14400

export default function TimerPage(){
    const [time, setTime] = useState(WORK_TIME);
    const [running, setRunning] = useState(false);

    function endTimer(){
        setRunning(false);
        const alarm = new Audio("/music/alarm/dendenmushi.mp3");
        alarm.play();
    }

    useEffect(() => {
        if (!running) return;

        const interval = setInterval(() => {
            setTime((prev) => {
                if (prev <= 1) {
                    endTimer();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [running]);

    const handleClick = () => {
        setRunning(true);
    }

    const handlePause = () => {
        setRunning(false);
    }

    return(
        <section className={styles.section}>
            <div className={styles.timerContainer}>
                <p>{time}</p>
                <button onClick={!running ? handleClick : handlePause}>{!running ? "Start" : "Pause"}</button>
            </div>
            <NavBar />
        </section>
    )
}