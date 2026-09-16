
import styles from "./clock-config.module.css";
import Image from "next/image";

export default function ClockConfig({ hour, minute, setTime }: { hour: number; minute: number; setTime: (time: number) => void }){
    return(
        <form className={styles.form}>
            <div className={styles.timeContainer}>
                <button className={styles.changeTimeButton} type="submit" onClick={(e) => { e.preventDefault(); setTime((hour + 1) * 3600 + minute * 60); }}>
                    <Image src="/icons/arrow_top_icon.svg" alt="Increase hour" height={35} width={35} />
                </button>
                <input className={styles.changeTimeInput} type="number" id="hour" placeholder="Enter hour" value={hour} onChange={(e) => setTime(Number(e.target.value) * 3600 + minute * 60)} />
                <button className={styles.changeTimeButton} type="submit" onClick={(e) => { e.preventDefault(); setTime((hour - 1) * 3600 + minute * 60); }}>
                    <Image src="/icons/arrow_bottom_icon.svg" alt="Decrease hour" height={35} width={35} />
                </button>
            </div>
            <span>:</span>
            <div className={styles.timeContainer}>
                <button className={styles.changeTimeButton} type="submit" onClick={(e) => { e.preventDefault(); setTime(hour * 3600 + (minute + 10) * 60); }}>
                    <Image src="/icons/arrow_top_icon.svg" alt="Increase minute" height={35} width={35} />
                </button>
                <input className={styles.changeTimeInput} type="number" id="minute" placeholder="Enter minute" value={minute} onChange={(e) => setTime(hour * 3600 + Number(e.target.value) * 60)} />
                <button className={styles.changeTimeButton} type="submit" onClick={(e) => { e.preventDefault(); setTime(hour * 3600 + (minute - 10) * 60); }}>
                    <Image src="/icons/arrow_bottom_icon.svg" alt="Decrease minute" height={35} width={35} />
                </button>
            </div>
        </form>
    )
}