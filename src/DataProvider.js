import React from "react"
import { useState } from "react";

export const ShareData = React.createContext();

export const DataProvider = ({children}) => {

    //入力内容をdata変数に入れて配列として状態管理
    const [ data, setData ] = useState([]);

    return (
        <ShareData.Provider value={{data,setData}}>
            {children}
        </ShareData.Provider>
    )
}