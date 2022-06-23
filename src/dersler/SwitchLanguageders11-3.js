import { memo } from "react";
import { useSite } from "./context";

 function SwitchLanguage() {
    const {language, setLanguage } = useSite() 
 
    return (
            <>
             Mevcut Dil = {language} <br/>
             <button onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}>Dili Değiştir</button>
               
        </>
    )
    
}

export default memo(SwitchLanguage)