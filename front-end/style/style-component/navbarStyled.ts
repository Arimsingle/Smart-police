import styled from "styled-components";
export const Navbar = {
    Item: styled.div`
        background-color:#39374e;
        height:80px;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:1.2rem;
        .nav-menu{
            display:grid;
            grid-template-columns:repeat(5,auto);
            grid-gap:10px;
            list-style:none;
            text-align:center;
            width:70vw;
            justify-content:end;
            margin:0;
        }

        .nav-links{
            color:#fff;
            display: flex;
            align-items: center;
            text-decoration:none;
            padding: 0.5rem 1rem;
            height: 100%;
        }
        .nav-links:hover{
            color:#ff3639;
            transform: scale(1.1);
        }

        .menu-icon{
            color:#fff;
            display:none;
        }
        .nav-item {
            height: 80px;
            border-bottom: 2px solid transparent;
          }
        .nav-item:hover {
            border-bottom: 2px solid #ff3639;
            transition: all 0.3s linear;

          }
        @media only screen and (max-width: 960px){
            position:relative;
            .nav-menu{
                display:flex;
                flex-direction:column;
                width:100%;
                height:500px;
                position:absolute;
                top:80px;
                left:-100%;
                opacity:1;
                transition: all 0.5s ease;
            }
            .nav-menu.active{
                background-color:#3b3a52;
                left:0;
                opacity:1;
                transition:all 0.3s ease-out;
                z-index:1;
            }
            .nav-item:hover {
                border: none;
              }
            
            .nav-item {
                width: 100%;
              }
            .nav-links {
                text-align: center;
                padding: 2rem;
                width: 100%;
                display: table;
              }
            .nav-links:hover{
                border-radius:0;
            }
            .menu-icon{
                display:block;
                position:absolute;
                top:-10%;
                right:0;
                transform:translate(-100%,60%);
                font-size:1.8rem;
                cursor:pointer;
            }
            .menu-icon:hover{
                color:#ff3639;
            }
        }
    `,
    Logo: styled.h1`
        color:#fff;
        justify-self:start;
        margin-left:10px;
        cursor:pointer;
        .police-logo{
            margin-bottom:0.3rem;
            margin-left:0rem;
            font-size:2.4rem;
        }
        @media only screen and (max-width: 1022px) and (min-width: 960px){
            font-size:2.1rem;
        }
        @media screen and (max-width:500px){
            font-size:1.8rem;
            margin:0;
            margin-top:10px;
        }
        @media screen and (max-width:960px){
            position:absolute;
            top:-10%;
            left:0;
            transform:translate(25%,50%);
        }
`
}