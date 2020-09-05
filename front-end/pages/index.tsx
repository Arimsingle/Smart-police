import fontJSX from "../tsx/font"
import { Home } from "./HomePage";
const IndexPage = () => (
  <div>
    <Home />
    <style jsx global>
      {fontJSX}
    </style>
  </div>
)
export default IndexPage;
