import fontJSX from "../font-config/font";
import { NavBar } from "../components/nav-bar/NavBar";
import styled from "styled-components";
// import { dataImg_background } from "../public/static/images/data/bg_svg";
import { useState, useEffect, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Card } from "antd";
import { FaFacebook, FaInstagram, FaGithub, FaUserTie } from "react-icons/fa";
import { animated } from "react-spring";
import { ContactStyled } from "../style/style-component/contact/contactStyled";
import { FuncArrowAnimation } from "../style/spring/spring_effect";
import AOS from "aos";
import "aos/dist/aos.css";
const ArrowAnimation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @keyframes changeY {
    0% {
      transform: translateY(-10%);
      opacity: 0%;
    }
    50% {
      transform: translateY(-20%);
      opacity: 50%;
    }
    100% {
      transform: translateY(50%);
      opacity: 100%;
    }
  }
  .arrow {
    font-size: 10px;
    animation-duration: 1s;
    animation-name: changeY;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
  }
  .stick {
    margin-top: -55px;
  }
  .arrow:hover {
    cursor: pointer;
  }
`;

const Contact: React.FC = () => {
  const [offsetY, setOffsetY] = useState<number>(0);
  const ref = useRef<any>();
  useEffect(() => {
    window.addEventListener<"scroll">("scroll", () =>
      setOffsetY(window.pageYOffset)
    );
  }, []);
  // console.log("offsetY => ", offsetY);
  const svgGroup = (
    <div>
      <div className="arrow">
        <svg
          width="135"
          height="78"
          viewBox="0 0 735 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M357.188 520.421L216.203 379.598C209.403 372.806 209.403 361.795 216.203 355.004L232.647 338.579C239.435 331.799 250.436 331.786 257.24 338.55L369.5 450.155L481.759 338.55C488.563 331.786 499.565 331.799 506.353 338.579L522.796 355.004C529.596 361.795 529.596 372.807 522.796 379.598L381.812 520.421C375.012 527.212 363.988 527.212 357.188 520.421Z"
            fill="#DBDBDB"
          />
        </svg>
      </div>
      <div className="arrow stick">
        <svg
          width="135"
          height="78"
          viewBox="0 0 735 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M357.188 520.421L216.203 379.598C209.403 372.806 209.403 361.795 216.203 355.004L232.647 338.579C239.435 331.799 250.436 331.786 257.24 338.55L369.5 450.155L481.759 338.55C488.563 331.786 499.565 331.799 506.353 338.579L522.796 355.004C529.596 361.795 529.596 372.807 522.796 379.598L381.812 520.421C375.012 527.212 363.988 527.212 357.188 520.421Z"
            fill="#DBDBDB"
          />
        </svg>
      </div>
    </div>
  );
  const url = (name: string, wrap: boolean = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
      wrap ? ")" : ""
    }`;

  const setImg = (path: string) => `/static/images/${path}`;

  return (
    <ContactStyled>
      <Parallax ref={ref} pages={3} >
        <NavBar />
        <ParallaxLayer
          offset={0}
          speed={1}
          style={{ backgroundColor: "#3b3a50" }}
        />
        <ParallaxLayer
          offset={0}
          speed={1.2}
          factor={1}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer offset={0.1} speed={-0.8}>
          <div className="profile">
            <p className="text-picture">PROGRAMER</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.16} speed={-0.8}>
          <div className="profile">
            <img
              src={setImg("object/profile1.jpg")}
              style={{ display: "block", width: "25%" }}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.7}
          speed={-0.8}
          onClick={() => ref.current.scrollTo(0.5)}
        >
          <ArrowAnimation>
            <img
              src={setImg("object/arrow-down-sign-to-navigate.png")}
              className="arrow"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "3%",
                cursor: "pointer",
              }}
            />
          </ArrowAnimation>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={1.5}
          factor={2}
          style={{ backgroundColor: "#2E294E" }}
        />
        <ParallaxLayer
          offset={1}
          speed={1.2}
          factor={1}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer offset={0.92} speed={1}>
          <div className="profile">
            <p className="text-picture">ABOUT ME</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.98} speed={0.8}>
          <div className="profile text-picture">
            <p>Infomation</p>
            <div>
              <animated.div style={FuncArrowAnimation(-10, 1, 0, 1000)}>
                <Card
                  title={
                    <FaUserTie
                      className="text-picture"
                      style={{ color: "black" }}
                    />
                  }
                  bordered={true}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "start",
                    }}
                  >
                    <pre className="card-user">Name: Arim Cheberahim </pre>
                    <pre className="card-user">ID: 6035512059</pre>
                    <pre className="card-user">University: PSU PHUKET</pre>
                  </div>
                </Card>
              </animated.div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={0.8}>
          <div className="profile text-picture">
            <p>Social</p>
            <div className="size-icon">
              <div style={{ marginRight: "1rem" }}>
                <animated.div style={FuncArrowAnimation(-10, 1, 0, 1000)}>
                  <Card style={{ width: "100%" }} className="card">
                    <span className="icon">
                      <a
                        href="https://www.w3schools.com"
                        target="_blank"
                        style={{ textDecoration: "none", color: "#3b5998" }}
                      >
                        <FaFacebook /> Facebook
                      </a>
                    </span>
                  </Card>
                </animated.div>
              </div>
              <div style={{ marginRight: "1rem" }}>
                <animated.div style={FuncArrowAnimation(-10, 1, 0, 1000)}>
                  <Card style={{ width: "100%" }} className="card">
                    <span className="icon">
                      <a
                        href="https://www.w3schools.com"
                        target="_blank"
                        style={{ textDecoration: "none", color: "#DD2A7B" }}
                      >
                        <FaInstagram /> Instagram
                      </a>
                    </span>
                  </Card>
                </animated.div>
              </div>
              <div>
                <animated.div style={FuncArrowAnimation(-10, 1, 0, 1000)}>
                  <Card style={{ width: "100%" }} className="card">
                    <span className="icon">
                      <a
                        href="https://www.w3schools.com"
                        target="_blank"
                        style={{ textDecoration: "none", color: "#8134AF" }}
                      >
                        <FaGithub /> Github
                      </a>
                    </span>
                  </Card>
                </animated.div>
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.6}
          speed={2}
          factor={3}
          style={{ backgroundColor: "#011638" }}
        />
        <ParallaxLayer
          offset={2.6}
          speed={1.2}
          factor={3}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer offset={2} speed={1}>
          <div className="profile">
            <p className="text-picture">ADVISOR</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.2} speed={1}>
          <div className="profile">
            <img
              src={setImg("object/profile3.jpg")}
              style={{ display: "block", width: "25%" }}
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.03}
          speed={-0.9}
          style={{ pointerEvents: "none", opacity: 0.1 }}
        >
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.05}
          speed={-1.2}
          style={{ pointerEvents: "none", opacity: 0.1 }}
        >
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "5%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.05}
          speed={-1}
          style={{ pointerEvents: "none", opacity: 0.1 }}
        >
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "85%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={1}
          factor={3}
          style={{ backgroundColor: "#000e24" }}
        />
        <ParallaxLayer offset={4} speed={1}>
          <div className="bg-clound">
            <img
              src={setImg("object/night (1).png")}
              style={{
                display: "block",
                width: "70%",
                opacity: "30%",
              }}
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.6}
          speed={1.2}
          factor={3}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer offset={3.05} speed={1}>
          <div className="profile">
            <p className="text-picture">ABOUT ME</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.9} speed={0.75}>
          <div className="profile text-picture">
            <p>Infomation</p>
            <div>
              <animated.div style={FuncArrowAnimation(-10, 1, 0, 1000)}>
                <Card
                  title={
                    <FaUserTie
                      className="text-picture"
                      style={{ color: "black" }}
                    />
                  }
                  bordered={true}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "start",
                    }}
                  >
                    <pre className="card-user">Name: Noppon Cheberahim </pre>
                    <pre className="card-user">ID: - </pre>
                    <pre className="card-user">University: PSU PHUKET</pre>
                  </div>
                </Card>
              </animated.div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3.2} speed={0.6}>
          <div className="profile text-picture">
            <p>Social</p>
            <div className="size-icon">
              <div style={{ marginRight: "1rem" }}>
                <animated.div style={FuncArrowAnimation(-10, 1, 0, 1000)}>
                  <Card style={{ width: "100%" }} className="card">
                    <span className="icon">
                      <a
                        href="https://www.w3schools.com"
                        target="_blank"
                        style={{ textDecoration: "none", color: "#3b5998" }}
                      >
                        <FaFacebook /> Facebook
                      </a>
                    </span>
                  </Card>
                </animated.div>
              </div>
              <div style={{ marginRight: "1rem" }}>
                <animated.div style={FuncArrowAnimation(-10, 1, 0, 1000)}>
                  <Card style={{ width: "100%" }} className="card">
                    <span className="icon">
                      <a
                        href="https://www.w3schools.com"
                        target="_blank"
                        style={{ textDecoration: "none", color: "#DD2A7B" }}
                      >
                        <FaInstagram /> Instagram
                      </a>
                    </span>
                  </Card>
                </animated.div>
              </div>
              <div>
                <animated.div style={FuncArrowAnimation(-10, 1, 0, 1000)}>
                  <Card style={{ width: "100%" }} className="card">
                    <span className="icon">
                      <a
                        href="https://www.w3schools.com"
                        target="_blank"
                        style={{ textDecoration: "none", color: "#8134AF" }}
                      >
                        <FaGithub /> Github
                      </a>
                    </span>
                  </Card>
                </animated.div>
              </div>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
      <style jsx global>
        {fontJSX}
      </style>
    </ContactStyled>

    // <ContactStyled>
    //   <Parallax ref={ref} pages={1.8} scrolling="false">
    //     <NavBar />
    //     <ParallaxLayer
    //       offset={0}
    //       speed={1}
    //       style={{ backgroundColor: "#3b3a50" }}
    //     />

    //     <ParallaxLayer
    //       offset={1}
    //       speed={2}
    //       style={{ backgroundColor: "#2E294E" }}
    //     />
    //     <ParallaxLayer
    //       offset={2}
    //       speed={2}
    //       factor={3}
    //       style={{ backgroundColor: "#011638" }}
    //     />

    //     <ParallaxLayer
    //       offset={0}
    //       speed={1.2}
    //       factor={3}
    //       style={{
    //         backgroundImage: url("stars", true),
    //         backgroundSize: "cover",
    //       }}
    //     />
    //     <ParallaxLayer
    //       offset={0.03}
    //       speed={-0.5}
    //       style={{ pointerEvents: "none", opacity: 0.1 }}
    //     >
    //       <img
    //         src={url("cloud")}
    //         style={{ display: "block", width: "10%", marginLeft: "15%" }}
    //       />
    //     </ParallaxLayer>

    //     <ParallaxLayer
    //       offset={0.09}
    //       speed={-1.5}
    //       style={{ pointerEvents: "none", opacity: 0.1 }}
    //     >
    //       <img
    //         src={url("cloud")}
    //         style={{ display: "block", width: "15%", marginLeft: "1%" }}
    //       />
    //     </ParallaxLayer>

    //     <ParallaxLayer offset={0.09} speed={-1} className="flex-space-around">
    //       <div style={{ marginTop: "-20%" }}>
    //         <h1 style={{ color: "white", cursor: "pointer" }}>
    //           <div className="space-icon-text">
    //             <FaUserTie style={{ marginRight: "1rem" }} />
    //             <animated.div style={funcPropsFullName()}>
    //               Arim Cheberahim
    //             </animated.div>
    //           </div>
    //         </h1>
    //         <h1 style={{ color: "white" }}>
    //           <div className="space-icon-text">
    //             <FaPhoneSquareAlt style={{ marginRight: "1rem" }} />
    //             <animated.div style={funcPropsPhone()}>0936783698</animated.div>
    //           </div>
    //         </h1>
    //         <h1 style={{ color: "white" }}>
    //           <div className="space-icon-text">
    //             <FaMailBulk style={{ marginRight: "1rem" }} />
    //             <animated.div style={funcPropsEmail()}>
    //               s6035512059@phuket.psu.ac.th
    //             </animated.div>
    //           </div>
    //         </h1>
    //         <h1 style={{ color: "white" }}>
    //           <div className="space-icon-text">
    //             <FaFacebook style={{ marginRight: "1rem" }} />
    //             <animated.div style={funcPropsFacebook()}>Facebook</animated.div>
    //           </div>
    //         </h1>
    //         <h1 style={{ color: "white" }}>
    //           <div className="space-icon-text">
    //             <FaInstagram style={{ marginRight: "1rem" }} />
    //             <animated.div style={funcPropsInstagram()}>Instagram</animated.div>
    //           </div>
    //         </h1>
    //         <h1 style={{ color: "white" }}>
    //           <div className="space-icon-text">
    //             <FaGithub style={{ marginRight: "1rem" }} />
    //             <animated.div style={funcPropsGithub()}>Github</animated.div>
    //           </div>
    //         </h1>
    //       </div>
    //       <div>
    //         <img
    //           src="/static/images/object/profile.jpg"
    //           className="position-profile"
    //         />
    //       </div>
    //     </ParallaxLayer>
    //     <ParallaxLayer
    //       offset={0.03}
    //       speed={-1.9}
    //       style={{ pointerEvents: "none", opacity: 0.1 }}
    //     >
    //       <img
    //         src={url("cloud")}
    //         style={{ display: "block", width: "20%", marginLeft: "90%" }}
    //       />
    //     </ParallaxLayer>
    //     <ParallaxLayer offset={1.2} speed={1.5} className="flex-space-around">
    //       <div>
    //         <img src="/static/images/object/profile2.jpg" />
    //       </div>
    //       <div>
    //         <h1>Noppon</h1>
    //         <h1>6035512059</h1>
    //         <h1>PSU PHUKET</h1>
    //       </div>
    //     </ParallaxLayer>
    //   </Parallax>
    //   <style jsx global>
    //     {fontJSX}
    //   </style>
    // </ContactStyled>
  );
};
export default Contact;
