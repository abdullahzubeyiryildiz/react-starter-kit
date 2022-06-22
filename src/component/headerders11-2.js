import { memo } from "react";
import SwitchTheme from "./SwitchTheme";
import SwitchLanguage from "./SwitchLanguage";
import { useAuth } from "./context/AuthContext";
 function Header() {
    console.log('header rendered')

    const { user,setUser } = useAuth()
    const login = () => {
        setUser ({
            name: "Abdullah",
            id:1 
        })
    }

    const logout = () => {
        setUser (false)
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