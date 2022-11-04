import { useContext, useEffect } from "react";
import { ShareData } from "../DataProvider";
import styles from "../css/Inputpage.module.css";
import logo from "../images/fishlogo.png";
import fish from "../images/fish.png";

export const InputPage = () => {

    const { data, setData } = useContext(ShareData);

    //マウント時にローカルストレージのデータを持ってきてdata配列にセット
    useEffect(() => {
        if(localStorage.getItem("records")) {
           const getData = JSON.parse(localStorage.getItem("records"));
           setData(getData);
        }
    },[]);

    //入力内容をローカルストレージに追加
    const handleSubmit = (e) => {
        e.preventDefault();
        //入力内容を取得
        const name_data = document.frm.fishname.value;
        const size_data = document.frm.size.value;
        const location_data = document.frm.location.value;
        const date_data = document.frm.date.value;
        const howto_data = document.frm.howto.value;
        
        //入力内容をもとにオブジェクトを作成
        const record = {
            name: name_data,
            size: size_data,
            location: location_data,
            date: date_data,
            howto: howto_data
        };

        //dataを更新
        setData([...data,record]);
        console.log([...data,record]);

        //ローカルストレージに追加
        const jsonData = JSON.stringify([...data,record]);
        console.log(jsonData);
        localStorage.setItem("records", jsonData);
    }

    


    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>釣った魚の情報を入力しよう！</h1>
                <img src={logo} alt="" />
            </div>
            <img src={fish} alt="" className={styles.fish}/>
            <form action="" name="frm" onSubmit={handleSubmit}>
                <div className={styles.area}>
                    <div className={styles.label}>
                        <label htmlFor="">魚種名</label>
                    </div>
                    <div className={styles.input}>
                        <input type="text" name="fishname" id=""/>
                    </div>
                </div>
                <div className={styles.area}>
                    <div className={styles.label}>
                        <label htmlFor="">サイズ</label>
                    </div>
                    <div className={styles.input}>
                        <input type="text" name="size" id=""/>
                    </div>
                </div>
                <div className={styles.area}>
                    <div className={styles.label}>
                        <label htmlFor="">釣った場所</label>
                    </div>
                    <div className={styles.input}>
                        <input type="text" name="location" id=""/>
                    </div>
                </div>
                <div className={styles.area}>
                    <div className={styles.label}>
                        <label htmlFor="">日時</label>
                    </div>
                    <div className={styles.input}>
                        <input type="text" name="date" id=""/>
                    </div>
                </div>
                <div className={styles.text}>
                    <div className={styles.text_label}>
                        <label htmlFor="">釣った方法</label>
                    </div>
                    <div className={styles.textarea}>
                        <textarea name="howto" id="" cols="40" rows="10" ></textarea>
                    </div>
                </div>
                <div className={styles.to_btn}>
                    <a onClick={handleSubmit} href="" className={`${styles.btn} ${styles.btn_border_shadow} ${styles.btn_border_shadow__radius}`}>図鑑に追加</a>
                    <a href="/lab" className={`${styles.btn} ${styles.btn_border_shadow} ${styles.btn_border_shadow__radius}`}>図鑑に移動</a>
                </div>
            </form>
        </div>
    );
};