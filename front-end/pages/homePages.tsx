import { PageDisplay } from "../components/home/PageDisplay";
import { HomeDataOne, HomeDataTwo, HomeDataThree } from "../components/home/HomeDatas";
const Home: any = () => {
    return (
        <div>
            <PageDisplay {...HomeDataOne} />
            <PageDisplay {...HomeDataTwo} />
            <PageDisplay {...HomeDataThree} />
        </div>
    )
}
export default Home;