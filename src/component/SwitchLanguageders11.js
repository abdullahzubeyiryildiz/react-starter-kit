import { memo } from "react";

 function SwitchLanguage({language,setLanguage}) {
    
    return (
            <>
             Mevcut Dil = {language} <br/>
             <button onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}>Dili Değiştir</button>
               
        </>
    )
    
}

export default memo(SwitchLanguage)