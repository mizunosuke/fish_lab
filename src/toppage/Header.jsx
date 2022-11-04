import logo from "../images/header_logo.png";
import styles from "../css/Header.module.css";

export const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={logo} alt="" />
            </div>
            <div className={styles.title}>
                <h1>じぶんだけのさかなずかん</h1>
            </div>
        </div>
    )
}