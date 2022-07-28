import { useField,Field,ErrorMessage } from "formik";
 
export default function MultiSelect({label, options, original = false, ...props}) {
 
    const [field, meta, helpers] = useField(props) 

    const changeHandle = e => { 
        let selected;
         
        if(props.multiple) { 
            const multiple = [...e.target.selectedOptions].map((o) => o.value);
            selected = options.filter((option) => multiple.includes(option.key)); 
            helpers.setValue(original ? selected : multiple) 
        }else {
            selected = options.find((option) => option.key ===  e.target.value);
            helpers.setValue(original ? selected : e.target.value) 
        }
       
    } 

    return (
        <label className="block w-full">
            <div className="text-sm text-gray-600">{label}</div>
            <select className="w-full h-10 border-b outline-none focus:border-black" onChange={changeHandle} defaultValue={field.value} {...props} >
                {options.map((option, key) => ( 
                    <option value={option.key} key={key}>{option.value}</option>
                ))}
            </select>
            <ErrorMessage name={field.name} component="small" className="text-xs block mt-1 text-red-600" />
        </label>
    )
}