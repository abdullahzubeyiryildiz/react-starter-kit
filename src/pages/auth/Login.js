import { useAuth } from "../../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom"; 
import { Formik, Form } from "formik";
import Input from "../../components/form/Input";
import { LoginSchema } from "../../validations";

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
            }} onSubmit={ (values, actions) => {
               
                setUser(values)
                navigate(location?.state?.return_url || '/', {
                    replace:true, 
                }) 

                 /*
                 values apiye gonderdim
                 api cevap verdi ? 
                 */ 
                 /*setTimeout(() => {
                    actions.setSubmitting(false)
                    actions.resetForm()
                },3000) 
                */
              
            }}
            validationSchema={LoginSchema}
            >

                {({ values, isSubmitting }) => (
                        <Form className="grid gap-y-3 p-4"> 
                           <h1 className="text-2xl font-bold mb-3">Giriş Yap</h1>
                            <Input label="Kullanıcı Adı" name="username" /> 
                            <Input type="password" label="Parola" name="password" />
                            <button type="reset">Form Resetle</button>
                            <button disabled={isSubmitting} type="submit" className="bg-black h-10 rounded text-sm text-white disabled:opacity-40">Giriş Yap</button>
                        </Form>
                )}

            </Formik> 
         </div> 
    )
}