import { memo } from "react";
import SwitchTheme from "./SwitchTheme"; 
import SwitchLanguage from "./SwitchLanguage";
 function Footer() {
    console.log('Footer rendered')
    return (
        <footer>
        FOOTER <br/>
        <SwitchTheme /> 
        <SwitchLanguage />
        </footer> 
    )
    
}

export default memo(Footer)