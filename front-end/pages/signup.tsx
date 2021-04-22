import { useState } from "react"
import Link from "next/link";
import { FormSignup } from "../components/form/formSignup"
import { FormSuccsess } from "../components/form/formSuccess"
import { FormStyled } from "../style/style-component/formStyled"
import { AiOutlineHome } from "react-icons/ai";
import fontJSX from "../font-config/font";
const Form: React.FC = () => {
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [data, setData] = useState({ message: '', value: '' });
    const submitForm = () => {
        setIsSubmitted(true);
    }

    return (
        <FormStyled>
            <div className='form-container-signup'>
                <Link href="/">
                    <a className='close-btn'>
                        <AiOutlineHome />
                    </a>
                </Link>
                {/* <div className='form-content-left'>
                    <img className='form-img' src='/static/images/app.svg' alt='spaceship' />
                </div> */}
                {
                    !isSubmitted
                        ? (<FormSignup submitForm={submitForm} setData={setData} />)
                        : (<FormSuccsess data={data} />)
                }
                <style jsx global>
                    {fontJSX}
                </style>
            </div>
        </FormStyled>
    )
}
export default Form;