import { useAuth } from "../../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom"; 
import { useFormik } from "formik";
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

    const { handleSubmit,handleChange, values } = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: values => {
            console.log(values)
        }

    })
    return (
         <div> 
            <h3>Login Sayfası</h3>  
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Kulllanıcı Adı</label>
                <input type="text" id="username" value={values.username} onChange={handleChange} /> <br/>
                <label htmlFor="password">Parola</label>
                <input type="text" id="password" value={values.password} onChange={handleChange} />
                 <button type="submit">Giriş Yap</button>
          </form>
         </div> 
    )
}