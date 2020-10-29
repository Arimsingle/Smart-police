import { NavBar } from "../components/navBar/NavBar";
import fontJSX from "../tsx/font";
import GammaDisplay from "../components/three/gamma";
const DashBoard = () => {
    return (
        <div>
            <NavBar />
            <h1>Dashboard pages</h1>
            <GammaDisplay />
            <style jsx global>
                {fontJSX}
            </style>
        </div>
    )
}
export default DashBoard;