import { Helmet } from "react-helmet";
import { Formik,Form,Field, useFormikContext } from "formik";
import Input from "../components/form/Input";
import File from "../components/form/File";
import Checkbox from "../components/form/Checkbox";
import Textarea from "../components/form/Textarea";
import Select from "../components/form/Select";
import MultiSelect from "../components/form/MultiSelect";
import Radio from "../components/form/Radio";
import { useEffect } from "react";
import { SampleSchema, ContactSchema } from "../validations";

const AutoSubmitCode = () => {
    const {values, submitForm } = useFormikContext()
    useEffect(() => {
        if(values.code.length === 6) {
            submitForm()
        }
    }, [values])
   return null
}

export default function Contact() {
    return (
         <div>
           <Helmet>
                <title>İletişim Title</title> 
            </Helmet>
            <h3>İletişim</h3>
            <Formik 
                initialValues = {{
                    code : ''
                }} 
                validationSchema={SampleSchema}
                onSubmit={values => {
                    console.log(values)
                }} 
                >
                    {({values}) => (
                         <Form className="p-4 m-4 hidden shadow-lg grid gap-y-4 border rounded">
                            <Input label="Kodu Girin" name="code" />
                            <button type="submit">Gönder</button>
                            <AutoSubmitCode />
                        </Form>
                    )}   
                </Formik>

            <Formik 
                initialValues = {{
                    name:'Abdullah',
                    about: 'Hakkımda Yazısı',
                    accept: false,
                    gender:2,
                    avatar: '',
                    skills: ['html','css'],
                    level : 'sr'
                  //  skills: []
                }}
                onSubmit={values => {
                    console.log(values)
                }} 
                validationSchema={ContactSchema}
                >

                 {({values}) => (
                    <Form className="p-4 m-4 shadow-lg grid gap-y-4 border rounded">
                        <Input label="Ad-Soyad" name="name" /> <br /> 
                        <Textarea label="Hakkımda"  cols={20} rows={10}  name="about"  />
                        <Checkbox label="Kuralları Kabul Ediyorum!" name="accept" /> <br /><br />
 
                        <Select label="Cinsiyet" name="gender" original={false} options={[
                            { key:1, value:'Kadın' },
                            { key:2, value:'Erkek' }
                        ]}/> <br /><br />
                       
                        <MultiSelect label="Skills" name="skills" multiple original={false} options={[
                            { key:"php", value:'PHP' },
                            { key:"css", value:'CSS' },
                            { key:"js",  value:'JavaScript' },
                            { key:"html", value:'HTML' },
                        ]}/> 

                        <Radio label="Seviyenizi Seçin" name="level" options={[
                            { key:"jr", value:'Jr. Developer' },
                            { key:"sr", value:'Sr. Developer' }, 
                            { key:"ninja", value:'Ninja' },
                        ]}  />

                        <File label="Avatar" type="file" name="avatar" />
                        <button className="h-10 rounded bg-black text-sm text-white px-5" disabled={!values.accept} type="submit">Gönder</button>

                        <pre>{JSON.stringify(values, null, 2)}</pre>
                    </Form>
                 )}   
            </Formik>
         </div> 
    )
}