import { Helmet } from "react-helmet";
import { Formik,Form,Field } from "formik";
export default function Contact() {
    return (
         <div>
           <Helmet>
                <title>İletişim Title</title> 
            </Helmet>
            Contact Page
            <Formik 
                initialValues = {{
                    name:'Abdullah',
                    about: 'asdas asdsad',
                    accept: false,
                    gender:2,
                    avatar: '',
                    skills: ['html','css']
                  //  skills: []
                }}
                onSubmit={values => {
                    console.log(values)
                }}
                >

                 {({values}) => (
                    <Form>
                        <Field name="name" /> <br />
                        <Field component="textarea" cols={50} rows={20} name="about" /> <br />

                        <label> 
                        <Field type="checkbox" name="accept" />
                        Kuralları Kabul Ediyorum!
                        </label>  <br /> <br />
                        <Field component="select" name="gender">
                            <option value={1}>Kadın</option>
                            <option value={2}>Erkek</option>
                        </Field>
                        <Field component="select" name="skills" multiple={true}>
                            <option value="php">PHP</option>
                            <option value="css">CSS</option>
                            <option value="js">JavaScript</option>
                            <option value="html">HTML</option>
                        </Field>
                        <Field type="file" name="avatar" />
                        <button disabled={!values.accept} type="submit">Gönder</button>
                    </Form>
                 )}   
            </Formik>
         </div> 
    )
}