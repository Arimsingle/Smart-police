import Link from "next/link";
import { CgMenu, CgClose } from "react-icons/cg";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { NavData } from "./NavDatas";
import { Navbar } from "../../style/style-component/navbarStyled"
import { useState } from "react";
const NavBar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(state => !state);
    return (
        <Navbar.Item>
            <div className="fixed-navbar">
                <Navbar.Logo>
                    <GiPoliceOfficerHead className="police-logo" /> POLICE
            </Navbar.Logo>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <CgClose /> : <CgMenu />}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    {
                        NavData.map((Data, index) => {
                            return (
                                <li key={index} className='nav-item'>
                                    <Link href={Data.url}>
                                        <a className={Data.cName}>{Data.title}</a>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </Navbar.Item>
    )
}
export { NavBar };