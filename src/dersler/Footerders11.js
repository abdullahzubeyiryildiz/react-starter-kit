import { memo } from "react";
import SwitchTheme from "./SwitchTheme"; 
import SwitchLanguage from "./SwitchLanguage";
 function Footer({theme,setTheme,language,setLanguage}) {
    console.log('Footer rendered')
    return (
        <footer>
        FOOTER <br/>
        <SwitchTheme theme={theme} setTheme={setTheme} />

        
        <SwitchLanguage language={language} setLanguage={setLanguage} />
        </footer> 
    )
    
}

export default memo(Footer)