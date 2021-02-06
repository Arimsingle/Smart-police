import fontJSX from "../tsx/font";
import { NavBar } from "../components/navBar/NavBar";
const Contact = () => {
    return (
        <>
            <NavBar />
            <div className="d-flex justify-content-center">
                <h1>Contact page</h1>
            </div>
            <div className="d-flex justify-content-center">
            <img src="/static/images/anime.jpg" alt="police" className="dasdboard-img" />
            </div>
            <div className="d-flex justify-content-center">
                <p>นายอาริม เจ๊ะบือราเฮ็ม 6035512059</p>
            </div>
            <div className="d-flex justify-content-center">
                <p>ม.อ. ภูเก็ต</p>
            </div>
            <div className="d-flex justify-content-center">
                <p>23p14s0013</p>
            </div>
            <style jsx global>
                {fontJSX}
            </style>
        </>
    )
}
export default Contact;