import styled from "styled-components";
export const FooterStyled = styled.div`
    .footer-container {
        background-color: #1c2237;
        padding: 4rem 0 2rem 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .navbar-icon{
        margin-right:10px;
    }
    .footer-subscription {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-bottom: 24px;
        padding: 24px;
        color: #fff;
    }
  
    .footer-subscription-heading {
        margin-bottom: 24px;
        font-size: 24px;
    }
  
    .footer-subscription-text {
        margin-bottom: 24px;
        font-size: 20px;
    }
  
    .footer-input {
        padding: 8px 24px;
        border-radius: 2px;
        margin-right: 10px;
        outline: none;
        border: none;
        font-size: 18px;
        margin-bottom: 16px;
        border: 1px solid #fff;
    }

    .footer-links {
        width: 100%;
        max-width: 1000px;
        display: flex;
        justify-content: center;
    }
  
    .footer-link-wrapper {
        display: flex;
    }
  
    .footer-link-items {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 16px;
        text-align: left;
        width: 160px;
        box-sizing: border-box;
    }
  
    .footer-link-items h2 {
        margin-bottom: 16px;
    }
  
    .footer-link-items > h2 {
        color: #fff;
    }
  
    .footer-link-items a {
        color: #fff;
        text-decoration: none;
        margin-bottom: 0.5rem;
    }
  
    .footer-link-items a:hover {
        color: #ff3639;
        transition: 0.3s ease-out;
    }
    .footer-link-items p {
        color: #fff;
        text-decoration: none;
        margin-bottom: 0.5rem;
    }
  
    .footer-link-items p:hover {
        color: #e9e9e9;
        transition: 0.3s ease-out;
    }
  
    .footer-email-form h2 {
        margin-bottom: 2rem;
    }
  
    .footer-input::placeholder {
        color: #b1b1b1;
    }
  
    /* Social Icons */
    .social-icon-link {
        color: #fff;
        font-size: 24px;
    }
  
    .social-media {
        max-width: 1000px;
        width: 100%;
    }

    .social-media-wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        max-width: 1000px;
        margin: 40px auto 0 auto;
    }
  
    .social-icons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 240px;
        margin-bottom:16px;
    }
    .social-icons a:hover {
        color: #ff3639;
    }
  
    .social-logo {
        color: #fff;
        justify-self: start;
        margin-left: 20px;
        cursor: pointer;
        text-decoration: none;
        font-size: 2rem;
        display: flex;
        align-items: center;
        margin-bottom: 16px;
    }
  
    .website-rights {
        color: #fff;
        margin-bottom: 16px;
    }
  
    @media screen and (max-width: 820px) {
        .footer-links {
            padding-top: 2rem;
        }
  
        .footer-input {
            width: 100%;
        }
  
        .btn {
            width: 100%;
        }
  
        .footer-link-wrapper {
            flex-direction: column;
        }
  
        .social-media-wrap {
            flex-direction: column;
        }
  }`;