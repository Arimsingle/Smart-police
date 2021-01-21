import { NavBar } from "../components/navBar/NavBar";
import fontJSX from "../tsx/font";
import Transaction from '../components/transaction/Transaction'
// import GammaDisplay from "../components/three/gamma";
const DashBoard = () => {
    return (
        <div>
            <NavBar />
            <h1>Transaction</h1>
            <Transaction />
            {/* <GammaDisplay /> */}
            <style jsx global>
                {fontJSX}
            </style>
        </div>
    )
}
export default DashBoard;