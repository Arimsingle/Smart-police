import Link from "next/link";
import PropTypes, { InferProps } from "prop-types";
import { HomeStyled } from "../../style/style-component/homeStyled"
import { Button } from 'antd';
export const PageDisplay: any = ({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headLine,
    description,
    img,
    alt,
    imgStart
}: InferProps<typeof PageDisplay.propTypes>) => {
    return (
        <HomeStyled>
            <div className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}>
                <div className="container">
                    <div className="row home__hero-row" style={{ display: "flex", flexDirection: imgStart === "start" ? "row-reverse" : "row" }}>
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                <div className="top-line">
                                    {topLine}
                                </div>
                                <h1 className={lightText ? "heading" : "heading dark"}>
                                    {headLine}
                                </h1>
                                <p className={lightTextDesc ? "home__hero-subtitle" : "home__hero-subtitle dark"}>
                                    {description}
                                </p>
                                <Link href="#">
                                    <a>
                                        <Button type="primary" size="large" className="button">Monitor Explorer</Button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="home__hero-img-wrapper">
                                <img src={img} alt={alt} className="home__hero-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeStyled>
    )
}
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