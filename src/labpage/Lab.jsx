
import { useContext } from "react";
import styles from "../css/Lab.module.css";
import { ShareData } from "../DataProvider";


export const Lab = () => {
    const { setData } = useContext(ShareData);

    //ローカルストレージからデータを取得
     //データを取り出す
    const jasonData = localStorage.getItem("records");
    //データをオブジェクトに変換
    const data = jasonData ? JSON.parse(jasonData) : [];
    
    const handleDelete = (index) => {
        //配列の要素を削除
        if(jasonData) {
            //n番目のobjを削除(この時点でdata配列から)
            const removeData = data.splice(index,1);
            console.log(data);
            setData(data);
            console.log(removeData);
            localStorage.setItem("records",JSON.stringify(data));
        }
    }
  

    return (
        <div className={styles.container}>
            <div>
                <h1>いきものずかんリスト</h1>
            </div>
            <ul className={styles.lists}>
                {data.map((list,index) => (
                    <div className={styles.list}>
                        <div>
                            <h3>{list.name}</h3>
                        </div>

                        <div className={styles.content}>
                            <p>魚種名</p>
                            <li>{list.name}</li>
                        </div>
                        <div className={styles.content}>
                            <p>サイズ</p>
                            <li>{list.size}</li>
                        </div>
                        <div className={styles.content}>
                            <p>釣った場所</p>
                            <li>{list.location}</li>
                        </div>
                        <div className={styles.content}>
                            <p>日時</p>
                            <li>{list.date}</li>
                        </div>
                        <div className={styles.content}>
                            <p>釣り方・詳細</p>
                            <li>{list.howto}</li>
                        </div>

                        <div className={styles.deletebtn}>
                        <a href="#" onClick={()=>{handleDelete(index)}} className={`${styles.btn} ${styles.btn_border_shadow} ${styles.btn_border_shadow__radius}`}>削除</a>
                        </div>
                    </div>
                ))}
            </ul>
            <div className={styles.tohome}>
                <a href="/" className={`${styles.btn} ${styles.btn_border_shadow} ${styles.btn_border_shadow__radius}`}>HOMEに戻る</a>
            </div>
        </div>
    )
}