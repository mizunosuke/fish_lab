import styles from "../css/InputRecord.module.css";
import main_image from "../images/Record.png";

export const InputRecord = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={main_image} alt="" />
            </div>

            <div className={styles.btn}>
                <div className={styles.link}>
                    <a href="/input" className={`${styles.btn} ${styles.btn_border_shadow} ${styles.btn_border_shadow__radius}`}>きろくする</a>
                </div>
            </div>
        </div>
    )
}