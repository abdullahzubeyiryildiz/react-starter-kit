import { Helmet } from "react-helmet";
import { Formik,Form,Field } from "formik";
import Input from "../components/form/Input";
import File from "../components/form/File";
import Checkbox from "../components/form/Checkbox";
import Textarea from "../components/form/Textarea";
import Select from "../components/form/Select";
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
                    about: 'Hakkımda Yazısı',
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
                    <Form className="p-6">
                        <Input label="Ad-Soyad" name="name" /> <br /> 
                        <Textarea label="Hakkımda"  cols={20} rows={10}  name="about" defaultValue="Hakıımda Yazısı"  />
                        <Checkbox label="Kuralları Kabul Ediyorum!" name="accept" /> <br /><br />
 
                        <Select label="Cinsiyet" name="gender" options={[
                            { key:1, value:'Kadın' },
                            { key:2, value:'Erkek' }
                        ]}/> <br /><br />
                        <Field component="select" name="skills" multiple={true}>
                            <option value="php">PHP</option>
                            <option value="css">CSS</option>
                            <option value="js">JavaScript</option>
                            <option value="html">HTML</option>
                        </Field> 
                        <File label="Avatar" type="file" name="avatar" />
                        <button disabled={!values.accept} type="submit">Gönder</button>

                        <pre>{JSON.stringify(values, null, 2)}</pre>
                    </Form>
                 )}   
            </Formik>
         </div> 
    )
}