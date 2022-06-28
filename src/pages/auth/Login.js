import { useAuth } from "../../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom"; 
import {   Formik, Form, Field } from "formik";
export default function Login() {
    const navigate = useNavigate()
    const location = useLocation()
        console.log(location)
    const { setUser } = useAuth()
  

  
    return (
         <div> 
            <h3>Login Sayfası</h3>  <br/>
            <Formik initialValues={{
                username: '',
                password: ''
            }} onSubmit={ values => {
                setUser(values)
                navigate(location?.state?.return_url || '/', {
                    replace:true, 
                })
            }}>

                {({ values }) => (
                        <Form> 
                            <Field name="username" /><br/>
                            <Field name="password" />
                            <button type="submit">Giriş Yap</button>
                        </Form>
                )}

            </Formik> 
         </div> 
    )
}