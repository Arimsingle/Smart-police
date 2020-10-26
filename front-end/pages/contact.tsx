import fontJSX from "../tsx/font";
import { NavBar } from "../components/navBar/NavBar";
const Contact = () => {
    return (
        <div>
            <NavBar />
            <h1>Contact page</h1>
            <style jsx global>
                {fontJSX}
            </style>
        </div>
    )
}
export default Contact;