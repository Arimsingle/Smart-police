import { useEffect } from "react";
import AOS from "aos";
import Link from "next/link";
import { Button } from "antd";
import { FooterStyled } from "../../style/style-component/footerStyled";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaMediumM,
  FaLinkedin,
} from "react-icons/fa";
import { GiPoliceOfficerHead } from "react-icons/gi";
import "aos/dist/aos.css";
export const Footers = () => {
  useEffect(() => {
    AOS.init({
      duration: 300,
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <FooterStyled>
      <div className="footer-container">
        <section className="footer-subscription" data-aos="fade-down">
          <p className="footer-subscription-heading">
            ส่งเสริมให้เจ้าหน้าที่ตำรวจปฏิบัติหน้าที่ได้อย่างมีคุณภาพ
          </p>
          <p className="footer-subscription-text">
            หากพบปัญสามารถแจ้งรายละเอียดด้านล่าง
          </p>
          <div className="input-areas">
            <form>
              <input
                className="footer-input"
                name="email"
                type="email"
                placeholder="Your Email"
              />
              <Button type="primary" size="large">
                แจ้งปัญหา
              </Button>
            </form>
          </div>
        </section>
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items" data-aos="fade-right">
              <h2>เกี่ยวกับเรา</h2>
              <Link href="/">
                <a>PSU PHUKET</a>
              </Link>
              <Link href="/">
                <a>COE PHUKET</a>
              </Link>
              <Link href="/">
                <a>COC PHUKET</a>
              </Link>
            </div>
            <div className="footer-link-items" data-aos="fade-right">
              <h2>ติดต่อเรา</h2>
              <p>+66 76276012-13</p>
              <p>+66 76276012-14</p>
              <p>+66 76276012-15</p>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items" data-aos="fade-left">
              <h2>วีดีโอ</h2>
              <Link href="/">
                <a>Portfolio</a>
              </Link>
              <Link href="/">
                <a>University</a>
              </Link>
              <Link href="/">
                <a>Faculty</a>
              </Link>
            </div>
            <div className="footer-link-items" data-aos="fade-left">
              <h2>โซเชียล</h2>
              <Link href="https://www.facebook.com/arim.mn.10">
                <a target="_blank">Facebook</a>
              </Link>
              <Link href="https://github.com/Arimsingle">
                <a target="_blank">Github</a>
              </Link>
              <Link href="https://medium.com/@arimcheberahim">
                <a target="_blank">Medium</a>
              </Link>
            </div>
          </div>
        </div>
        <section className="social-media">
          <div className="social-media-wrap">
            <div className="footer-logo">
              <Link href="/">
                <a className="social-logo">
                  <GiPoliceOfficerHead className="navbar-icon" />
                  SMART POLICE
                </a>
              </Link>
            </div>
            <small className="website-rights">SMART POLICE © 2020</small>
            <div className="social-icons">
              <Link href="https://www.facebook.com/arim.mn.10">
                <a
                  target="_blank"
                  className="social-icon-link"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
              </Link>
              <Link href="/">
                <a
                  target="_blank"
                  className="social-icon-link"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </Link>
              <Link href="https://www.youtube.com/channel/UCAzY2MUbl3txnZLOlFZIZhg?view_as=subscriber">
                <a
                  target="_blank"
                  className="social-icon-link"
                  aria-label="Youtube"
                >
                  <FaYoutube />
                </a>
              </Link>
              <Link href="https://medium.com/@arimcheberahim">
                <a
                  target="_blank"
                  className="social-icon-link"
                  aria-label="Twitter"
                >
                  <FaMediumM />
                </a>
              </Link>
              <Link href="">
                <a
                  target="_blank"
                  className="social-icon-link"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </FooterStyled>
  );
};
