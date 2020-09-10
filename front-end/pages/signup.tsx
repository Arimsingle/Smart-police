import { useState } from "react"
import Link from "next/link";
import { FormSignup } from "../components/form/formSignup"
import { FormSuccsess } from "../components/form/formSuccess"
import { FormStyled } from "../style/style-component/formStyled"
import { AiOutlineHome } from "react-icons/ai";
import fontJSX from "../tsx/font";
const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const submitForm = () => {
        setIsSubmitted(true);
    }
    return (
        <FormStyled>
            <div className='form-container'>
                <Link href="/">
                    <a className='close-btn'>
                        <AiOutlineHome />
                    </a>
                </Link>
                <div className='form-content-left'>
                    <img className='form-img' src='/static/images/app.svg' alt='spaceship' />
                </div>
                {
                    !isSubmitted
                        ? (<FormSignup submitForm={submitForm} />)
                        : (<FormSuccsess />)
                }
                <style jsx global>
                    {fontJSX}
                </style>
            </div>
        </FormStyled>
    )
}
export default Form;