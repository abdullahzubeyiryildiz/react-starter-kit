import { memo } from "react";
import { useSite } from "./context";

 function SwitchLanguage() {
    const {language, dispatch } = useSite() 

    

    const swicthLanguage = () => {
        dispatch({
          type: 'TOOGLE_LANGUAGE', 
        })
    }
 
    return (
            <>
             Mevcut Dil = {language} <br/>
             <button onClick={swicthLanguage}>Dili Değiştir</button>
               
        </>
    )
    
}

export default memo(SwitchLanguage)