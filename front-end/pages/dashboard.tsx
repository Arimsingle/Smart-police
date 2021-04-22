import { NavBar } from "../components/nav-bar/NavBar";
import fontJSX from "../font-config/font";
const DashBoard = () => {
  return (
    <div>
      <NavBar />
      DASHBOARD
      <style jsx global>
        {fontJSX}
      </style>
    </div>
  );
};
export default DashBoard;
