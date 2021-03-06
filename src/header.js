import { memo } from "react";
import SwitchTheme from "./SwitchTheme";
import SwitchLanguage from "./SwitchLanguage";
import { useAuth } from "./context";
 function Header() {
    console.log('header rendered')

    const { user, dispatch } = useAuth()
    const login = () => {
        dispatch ({
            type: "LOGIN",
            payload: {
                name: 'Abdullah',
                id: 1
            }
        })
    }

    const logout = () => {
        dispatch ({
            type: "LOGOUT", 
        })
    }

    return (
        <header>
            HEADER <br/>
            {(user && <button onClick={logout}>Çıkış yap</button>) || (<button onClick={login}>Giriş Yap</button>) }
            <SwitchTheme /> 
            <SwitchLanguage />
       </header>
    )
    
}

export default memo(Header)