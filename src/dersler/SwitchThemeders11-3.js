import { memo } from "react";

import { useSite } from "./context";

 function SwitchTheme() {
   
   const {theme, dispatch} = useSite() 

   const switchTheme = () => {
        dispatch({
          type: 'SWITCH_THEME',
          value : theme === 'light' ? 'dark' : 'light'
        })
    }

    return (
            <>
             Mevcut tema = {theme} <br/>
             <button onClick={switchTheme}>Temayı Değiştir</button>
               
        </>
    )
    
}

export default memo(SwitchTheme)