import fontJSX from "../tsx/font";
import { NavBar } from "../components/navBar/NavBar";
import { Parallax } from "react-parallax";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import { dataImg_background } from "../public/static/images/data/bg_svg";
import { dataImg_anime } from "../public/static/images/data/bg_svg";
import { useState, useEffect } from "react";
const ContactStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: white;
  }
  @keyframes changeY {
    0% {
      transform: translateY(-10%);
      opacity: 0%;
    }

    100% {
      transform: translateY(10%);
      opacity: 100%;
    }
  }
  @keyframes changeY2 {
    0% {
      transform: translateY(-10%);
      opacity: 0%;
    }

    100% {
      transform: translateY(10%);
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
const BgrStyled = styled.div`
  background-color: #3b3a50;
  background-image: url(${dataImg_background});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: auto;
`;
const Contact = () => {
  const [offsetY, setOffsetY] = useState<number>(0);
  useEffect(() => {
    window.addEventListener<"scroll">("scroll", () =>
      setOffsetY(window.pageYOffset)
    );
  }, []);
  console.log(offsetY);
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
  return (
    <BgrStyled>
      <NavBar />
      <Parallax bgImage={dataImg_anime} bgImageAlt="anime" strength={800}>
        <ContactStyled>
          <div>
            <h1>Arim</h1>
            <Card style={{ width: "500px" }}>
              <Card.Img
                variant="top"
                src="https://cdn.vox-cdn.com/thumbor/J2XSqgAqREtpkGAWa6rMhkHA1Y0=/0x0:1600x900/1400x933/filters:focal(672x322:928x578):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/66320060/Tanjiro__Demon_Slayer_.0.png"
              />
              <Card.Body>
                <Card.Title>Arim</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>{offsetY < 480 && svgGroup}</div>
          <div>
            <h1>Noppon</h1>
            <Card style={{ width: "500px" }}>
              <Card.Img
                variant="top"
                src="https://cdn.vox-cdn.com/thumbor/J2XSqgAqREtpkGAWa6rMhkHA1Y0=/0x0:1600x900/1400x933/filters:focal(672x322:928x578):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/66320060/Tanjiro__Demon_Slayer_.0.png"
              />
              <Card.Body>
                <Card.Title>Noppon</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </ContactStyled>
        <div style={{ height: "100vh" }} />
      </Parallax>
      <style jsx global>
        {fontJSX}
      </style>
    </BgrStyled>
  );
};
export default Contact;
