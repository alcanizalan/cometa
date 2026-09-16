"use client";
import NavBar from "@/components/nav-bar/nav-bar";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

import DigitalClock from "@/components/clock/clock";

//14400;
const WORK_TIME = 5;

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
            <div className={styles.workspaceContainer}>
                <div className={styles.taskContainer}>
                    <form>
                        <input type="checkbox" id="task" placeholder="Enter task" />
                        <label htmlFor="task">Enter task</label>
                    </form>
                </div>
                <div className={styles.twoContainer}>2</div>
                <div className={styles.clockContainer}>
                    <div className={styles.clock}>
                        <DigitalClock />
                    </div>
                </div>
                <div className={styles.timerContainer}>
                    <p>{time}</p>
                    <button onClick={!running ? handleClick : handlePause}>{!running ? "Start" : "Pause"}</button>
                </div>
                <div className={styles.fiveContainer}>5</div>
                <div className={styles.sixContainer}>6</div>
                <div className={styles.sevenContainer}>7</div>
            </div>
            <NavBar />
        </section>
    )
}