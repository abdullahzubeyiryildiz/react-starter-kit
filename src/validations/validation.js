import * as Yup from "yup";

Yup.setLocale({
    mixed: {
        required: "Bu Alan Doldurulması Gereken Alandır.",
        oneOf: "Bu Alanı İşaretlemek Zorundasınız."
    },
    string :  { 
        min: 'Bu alan minimum ${min} karakter olmalıdır.',
        max: 'Bu alan maxsimim ${max} karakter olmalıdır.'
    } 
})

export default Yup