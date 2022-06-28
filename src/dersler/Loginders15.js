import { useAuth } from "../../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate()
    const location = useLocation()
        console.log(location)
    const { setUser } = useAuth()
    const loginHandle = () => {
        setUser({
            id:1,
            username:"abdullah"
        })
        navigate(location?.state?.return_url || '/', {
            replace:true,
            state: {
                name: 'abdullah'
            }
        })
    }
    return (
         <div> 
            <h3>Login Sayfası</h3>  
            <button onClick={loginHandle}>Giriş Yap</button>
         </div> 
    )
}