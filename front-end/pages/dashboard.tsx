import { NavBar } from "../components/navBar/NavBar";
import fontJSX from "../tsx/font";
const DashBoard = () => {
    return (
        <div>
            <NavBar />
            <h1>Dashboard pages</h1>
            <style jsx global>
                {fontJSX}
            </style>
        </div>
    )
}
export default DashBoard;