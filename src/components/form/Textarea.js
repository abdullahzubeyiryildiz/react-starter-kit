import classNames from "classnames";
import { useField,Field,ErrorMessage } from "formik";

export default function Textarea({label,...props}) {

    const [field, meta, helpers] = useField(props) 
    return (
        <label className="block w-full">
            <div className="text-sm text-gray-600 mb-1.5">{label}</div>
            <textarea className={classNames({
                "w-full h-10 border-b resize-none outline-none": true,
             "focus:border-black": !meta.error || !meta.touched,
             "border-red-600": meta.error && meta.touched
        })}  {...field} {...props} />
            <ErrorMessage name={field.name} component="small" className="text-xs block mt-2 text-red-600" />
        </label>
    )
}