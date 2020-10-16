import { Tags } from "../components/tags/tags";
import { NavBar } from "../components/navBar/NavBar";
import fontJSX from "../tsx/font";
const Logs = () => {
    return (
        <div>
            <div>
                <NavBar />
                <Tags />
            </div>
            <style jsx global>
                {fontJSX}
            </style>
        </div>
    )
}
export default Logs;