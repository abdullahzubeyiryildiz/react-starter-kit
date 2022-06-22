import { memo } from "react";

 function SwitchTheme({theme,setTheme}) {
    
    return (
            <>
             Mevcut tema = {theme} <br/>
             <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Temayı Değiştir</button>
               
        </>
    )
    
}

export default memo(SwitchTheme)