import { useState, useEffect } from "react"
import { FormInterface } from "../../interfaces/formInterface";
export const UseForm = (callback: any, Validaor: any) => {
    const [values, setValues] = useState<FormInterface>({
        username: "",
        email: "",
        password: "",
        password2: ""
    })
    const [errors, setErrors] = useState<any>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        setErrors(Validaor(values));
        setIsSubmitting(true);
    }
    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                callback();
            }
        },
        [errors]
    );
    return { handleChange, handleSubmit, values, errors };
}