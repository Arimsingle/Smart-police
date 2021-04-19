import styled from "styled-components";
export const ContactStyled = styled.div`
  .space-icon-text {
    display: flex;
    align-items: center;
    font-size: 150%;
  }
  .position-profile {
    width: 70%;
    height: auto;
    display: block;
    position: relative;
    right: -30%;
    margin-top: -30%;
  }
  .flex-space-around {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .bg-clound {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .card-user {
    font-size: 18px;
    font-weight: bold;
  }

  .text-picture {
    color: black;
    font-size: 18px;
    font-weight: bold;
  }

  .margin-between-profile {
    margin-left: 8%;
    margin-right: 8%;
  }
  .text-picture {
    color: white;
    font-size: 30px;
    font-weight: bold;
  }
  .icon {
    color: black;
    font-size: 15px;
    transition: font-size 0.2s;
  }
  .icon:hover {
    font-size: 20px;
    transition-timing-function: ease-in;
  }
  .size-icon {
    /* position: absolute;
    left: 35%; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card {
    transition: background-color 0.5s;
  }
  .card:hover {
    cursor: pointer;
    background-color: orange;
    transition-timing-function: ease;
  }
  .ig {
  }

  .github {
    /* position: absolute;
    left: 65%;
    z-index: 1; */
  }

  .phoneNumber {
    position: absolute;
    left: 20%;
    z-index: 1;
  }

  .mail {
    position: absolute;
    left: 80%;
    z-index: 1;
  }

  .user {
    position: absolute;
    left: 5%;
    z-index: 1;
  }
  .user {
    position: absolute;
    left: 95%;
  }
  .margin_right {
    margin-right: 1rem;
  }
`;
