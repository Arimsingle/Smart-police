import { NavBar } from "../components/navBar/NavBar";
import fontJSX from "../tsx/font";
import SetTransaction from '../components/transaction/SetTransaction';
import GetTransaction from '../components/transaction/GetTransaction';
// import GammaDisplay from "../components/three/gamma";
const DashBoard = () => {
    return (
        <>
            <NavBar />
            <div className="d-flex justify-content-center">
                <h1>บันทึก Transactions</h1>
            </div>
            <SetTransaction />
            <div className="d-flex justify-content-center">
                <h1>ตรวจสอบ Transactions</h1>
            </div>
            <GetTransaction />
            {/* <GammaDisplay /> */}
            <style jsx global>
                {fontJSX}
            </style>
        </>
    )
}
export default DashBoard;