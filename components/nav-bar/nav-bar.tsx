import styles from "./nav-bar.module.css";

import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
    return (
        <section className={styles.sectionNavBar}>
            <div className={styles.navBar}>
                <div className={styles.containerLink}>
                    <Link href="/">
                        <div className={styles.containerImage}>
                            <Image src="/icons/home_logo.svg" width={80} height={80} alt="Home" />
                        </div>
                    </Link>
                </div>
                <div className={styles.containerLink}>
                    <Link href="/workspace">
                        <div className={styles.containerImage}>
                            <Image src="/icons/work_logo.svg" width={80} height={80} alt="Projects" />
                        </div>
                    </Link>
                </div>
                <div className={styles.containerLink}>
                    <Link href="/diary">
                        <div className={styles.containerImage}>
                            <Image src="/icons/diary_logo.svg" width={80} height={80} alt="About" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}