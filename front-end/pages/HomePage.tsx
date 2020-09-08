import { NavBar } from "../components/navBar/NavBar";
import { PageDisplay } from "../components/home/PageDisplay";
import { HomeDataOne, HomeDataTwo, HomeDataThree } from "../components/home/HomeDatas";
import { Footers } from "../components/footer/Footer"
export const Home = () => {
    return (
        <div className="parent">
            <div className="nav-position">
            <NavBar />
            <PageDisplay {...HomeDataOne} />
            <PageDisplay {...HomeDataTwo} />
            <PageDisplay {...HomeDataThree} />
            <Footers /></div>
        </div>
    )
}