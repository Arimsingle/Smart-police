import { Tags } from "../components/tags/tags";
import { NavBar } from "../components/nav-bar/NavBar";
import fontJSX from "../font-config/font";
const Logs: React.FC = () => {
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