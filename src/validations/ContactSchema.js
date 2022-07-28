import Yup from "./validation";

export const ContactSchema = Yup.object().shape({
    name: Yup.string()
    .required(),

 
    about: Yup.string()
    .required(),


    accept: Yup.boolean()
    .required()
    .oneOf([true]),
   
    
    gender: Yup.string()
    .required(),
    
    
    avatar: Yup.mixed()
    .nullable()
    .test({
        message: "Bir Avatar seçmelisiniz",
        test: file => file?.name,
    }),
     
    skills: Yup.string()
    .required(),
    
    level: Yup.string()
    .required('Bir Seviye Seçiniz!') 
    
})