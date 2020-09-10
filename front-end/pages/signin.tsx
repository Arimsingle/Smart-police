import fontJSX from "../tsx/font";
import Link from "next/link";
import { FormSignin } from "../components/form/formSignin"
import { FormStyled } from "../style/style-component/formStyled"
import { AiOutlineHome } from "react-icons/ai";
const SignIn = () => {
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
                <FormSignin />
                <style jsx global>
                    {fontJSX}
                </style>
            </div>
        </FormStyled>
    )
}
export default SignIn;