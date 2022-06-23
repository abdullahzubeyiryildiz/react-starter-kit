import { memo } from "react";
import SwitchTheme from "./SwitchTheme";
import SwitchLanguage from "./SwitchLanguage";
 function Header({theme,setTheme,language,setLanguage}) {
    console.log('header rendered')
    return (
        <header>
            HEADER <br/>
            <SwitchTheme theme={theme} setTheme={setTheme} />

            <SwitchLanguage language={language} setLanguage={setLanguage} />
       </header>
    )
    
}

export default memo(Header)