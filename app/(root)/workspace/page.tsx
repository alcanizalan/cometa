"use client";
import NavBar from "@/components/nav-bar/nav-bar";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

import DigitalClock from "@/components/clock/clock";
import ClockConfig from "@/components/clock/clock-config/clock-config";

//14400;
const WORK_TIME = 14400;

export default function TimerPage(){

    const [workTime, setWorkTime] = useState(WORK_TIME);
    const [time, setTime] = useState(workTime);
    const [running, setRunning] = useState(false);

    const hour = Math.floor(time / 3600);
    const minute = Math.floor((time % 3600) / 60);
    const second = time % 60;

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
                    clearInterval(interval);
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
                    <p>{`${hour}:${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`}</p>
                    <button onClick={!running ? handleClick : handlePause}>{!running ? "Start" : "Pause"}</button>
                </div>
                <div className={styles.configTimerContainer}>
                    <ClockConfig
                        hour={hour}
                        minute={minute}
                        setTime={setTime}
                    />
                </div>
                <div className={styles.sixContainer}>6</div>
                <div className={styles.sevenContainer}>7</div>
            </div>
            <NavBar />
        </section>
    )
}