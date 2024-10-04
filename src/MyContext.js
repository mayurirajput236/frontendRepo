import { useContext,createContext,useState } from "react";

const NoticeContext=createContext();

export const useNotices=()=>{
    return useContext(NoticeContext);
}
export const NoticeProvider=({children}) =>{
    const[notices,setNotices]=useState([]);

    const addNotice=(notice)=>{
        setNotices((prevNotices)=>[...prevNotices,notice]);
    };
    return(
        <NoticeContext.Provider value={{notices,addNotice}}>
               {children}
        </NoticeContext.Provider>
    )
}

