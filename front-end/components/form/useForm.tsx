import axios from 'axios'
import { useState, useEffect } from "react"
import { FormInterface } from "../../interfaces/formInterface";
export const UseForm = (callback: any, Validaor: any) => {
    const [values, setValues] = useState<FormInterface>({
        username: "",
        surname: "",
        email: "",
        phone: "",
        password: "",
        password2: "",
        address: ""
    })
    const [errors, setErrors] = useState<any>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const RegisterDatas = async (valueRegister: FormInterface) => {
        await axios.post(`http://localhost:8000/api/police/register`, valueRegister)
            .then((result) => {
                console.log(result);
            }).catch((err) => {
                console.log(err);
            })
        console.log(valueRegister);
    }
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
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            RegisterDatas(values);
            callback();
        }
    },
        [errors]);
    return { handleChange, handleSubmit, values, errors };
}