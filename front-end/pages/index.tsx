import Home from "./homePages";
import fontJSX from "../tsx/font";
// import FaceDetect from "../components/faceApi/faceDetect";
import { NavBar } from "../components/navBar/NavBar";
import { Footers } from "../components/footer/Footer";
import { BsChevronDoubleUp } from "react-icons/bs";
import styled from "styled-components";
import { BackTop } from "antd";

const IndexPage = () => {
  const CardArrow = styled.div`
    height: 40px;
    width: 40px;
    line-height: 40px;
    border-radius: 4px;
    background-color: #1088e9;
    color: #fff;
    text-align: center;
    font-size: 18px;
  `;
  return (
    <div>
      <div>
        <NavBar />
        <Home />
        <Footers />
        <BackTop>
          <CardArrow>
            <BsChevronDoubleUp />
          </CardArrow>
        </BackTop>
      </div>

      <style jsx global>
        {fontJSX}
      </style>
    </div>
  );
};

export default IndexPage;
