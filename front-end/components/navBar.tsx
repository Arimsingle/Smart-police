import Link from "next/link";
import { CgMenu, CgClose } from "react-icons/cg";
import { GiPoliceBadge } from "react-icons/gi";
import { MenuBars } from "./menuBars/menuBars";
import { NavbarJSX } from "../style/style-component/navbar"
import { useState } from "react";
const NavBar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(state => !state);
    return (
        <NavbarJSX.Item>
            <NavbarJSX.Logo>
                <GiPoliceBadge className="react-logo" /> Smart Police
            </NavbarJSX.Logo>
            <div className="menu-icon" onClick={handleClick}>
                {click ? <CgClose /> : <CgMenu />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                {
                    MenuBars.map((Bar, index) => {
                        return (
                            <li key={index}>
                                <Link href={Bar.url}>
                                    <a className={Bar.cName}>{Bar.title}</a>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </NavbarJSX.Item>
    )
}
export { NavBar };