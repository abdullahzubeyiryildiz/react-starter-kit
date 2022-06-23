import { useContext,memo } from "react";

import SiteContext, { Context } from "./context/SiteContext";

 function SwitchTheme() {
    
   const {theme, setTheme } = useContext(Context) 
    return (
            <>
             Mevcut tema = {theme} <br/>
             <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Temayı Değiştir</button>
               
        </>
    )
    
}

export default memo(SwitchTheme)