import { Header } from "./Header";
import { InputRecord } from "./InputRecord";
import { ShowRecord } from "./ShowRecord";
import styles from "../css/Home.module.css";


export const Home = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.main}>
                <InputRecord/>
                <ShowRecord/>
            </div>
        </div>
    ) 
}