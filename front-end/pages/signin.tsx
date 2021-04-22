import fontJSX from "../font-config/font";
import Link from "next/link";
import { FormSignin } from "../components/form/formSignin";
import { FormStyled } from "../style/style-component/formStyled";
import { AiOutlineHome } from "react-icons/ai";
import { maleSvg } from "../path/images/path-image";
const SignIn: React.FC = () => {
  return (
    <FormStyled>
      <div className="form-container">
        <Link href="/">
          <a className="close-btn-signin">
            <AiOutlineHome />
          </a>
        </Link>

        <div className="form-content-left">
          <img className="form-img" src={maleSvg} alt="spaceship" />
        </div>
        <FormSignin />
        <style jsx global>
          {fontJSX}
        </style>
      </div>
    </FormStyled>
  );
};
export default SignIn;
