
import { getDigitalClock } from "@/utils/clock";
import styles from "./clock.module.css"

export default function DigitalClock() {

    const [hours, minutes, seconds] = getDigitalClock();

    return (
        <div className={styles.timer}>
          <div className={styles.digit}>{hours}</div>
          <div className={styles.separator}>:</div>
          <div className={styles.digit}>{minutes}</div>
          <div className={styles.separator}>:</div>
          <div className={styles.digit}>{seconds}</div>
        </div>
    )
}