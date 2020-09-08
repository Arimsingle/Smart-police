import fontJSX from "../tsx/font";
import Home from "./homePages";
import { NavBar } from "../components/navBar/NavBar";
import { Footers } from "../components/footer/Footer";
const IndexPage = () => (
  <div>
    <div>
      <NavBar />
      <Home />
      <Footers />
    </div>
    <style jsx global>
      {fontJSX}
    </style>
  </div>
)
export default IndexPage;
