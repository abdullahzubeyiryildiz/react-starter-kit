import { memo } from "react";

import { useSite } from "./context/SiteContext";

 function SwitchTheme() {
    
   const {theme, setTheme } = useSite() 
    return (
            <>
             Mevcut tema = {theme} <br/>
             <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Temayı Değiştir</button>
               
        </>
    )
    
}

export default memo(SwitchTheme)