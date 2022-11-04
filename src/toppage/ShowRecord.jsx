import styles from "../css/Showrecord.module.css";
import main_image from "../images/Showrecord.png";

export const ShowRecord = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={main_image} alt="" />
            </div>

            <div className={styles.btn}>
                <div className={styles.link}>
                    <a href="/lab" className={`${styles.btn} ${styles.btn_border_shadow} ${styles.btn_border_shadow__radius}`}>ずかんをみる</a>
                </div>
            </div>
        </div>
    );
}