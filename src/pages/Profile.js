import { useAuth } from "../context/AuthContext"
import {Link} from "react-router-dom";
export default function Profile() {

    const { setUser, user } = useAuth()
    const logoutHandle = () => {
        setUser(false)
    }
    return (
         <div>
            Profil Sayfası
            {!user && <Link to="/auth/login">Giriş Yap</Link>}
            {user && <button onClick={logoutHandle}>Çıkış Yap</button>} 
         </div> 
    )
}