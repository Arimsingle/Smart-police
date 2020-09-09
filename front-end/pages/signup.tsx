import { useState } from "react"
import Link from "next/link";
import { useRouter } from 'next/router'
import { FormSignup } from "../components/form/formSignup"
import { FormStyled } from "../style/style-component/formStyled"
import { VscArrowLeft } from "react-icons/vsc";
import fontJSX from "../tsx/font";
const Form = () => {
    const router = useRouter();
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const submitForm = () => {
        setIsSubmitted(true);
    }
    return (
        <FormStyled>
            <div className='form-container'>
                <Link href="/">
                    <a className='close-btn'>
                        <VscArrowLeft />
                    </a>
                </Link>
                <div className='form-content-left'>
                    <img className='form-img' src='/static/images/verifier.svg' alt='spaceship' />
                </div>
                {
                    !isSubmitted
                        ? (<FormSignup submitForm={submitForm} />)
                        : (router.push('/signin'))
                }
                <style jsx global>
                    {fontJSX}
                </style>
            </div>
        </FormStyled>
    )
}
export default Form;