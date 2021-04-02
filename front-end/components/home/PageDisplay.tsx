import Link from "next/link";
import PropTypes, { InferProps } from "prop-types";
import { HomeStyled } from "../../style/style-component/homeStyled";
import { Button } from "antd";
// import GammaDisplay from "../three/gamma";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export const PageDisplay: any = ({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headLine,
  description,
  img,
  alt,
  imgStart,
}: InferProps<typeof PageDisplay.propTypes>) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <HomeStyled>
      <div
        className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
      >
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div
                className="home__hero-text-wrapper"
                data-aos="fade-right"
                data-aos-offset="500"
                data-aos-duration="500"
                data-aos-easing="ease-in-sine"
              >
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headLine}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle"
                      : "home__hero-subtitle dark"
                  }
                >
                  {description}
                </p>
                <Link href="/dashboard">
                  <a>
                    <Button type="primary" size="large" className="button">
                      Monitor Explorer
                    </Button>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col">
              <div
                className="home__hero-img-wrapper"
                data-aos="fade-left"
                data-aos-offset="500"
                data-aos-duration="500"
                data-aos-easing="ease-in-sine"
              >
                <img src={img} alt={alt} className="home__hero-img" />
                {/* <div className="home__hero-img">
                                    <GammaDisplay />
                                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeStyled>
  );
};
//type of props
PageDisplay.propTypes = {
  lightBg: PropTypes.bool.isRequired,
  lightText: PropTypes.bool.isRequired,
  lightTextDesc: PropTypes.bool.isRequired,
  topLine: PropTypes.string.isRequired,
  headLine: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  imgStart: PropTypes.string.isRequired,
};
