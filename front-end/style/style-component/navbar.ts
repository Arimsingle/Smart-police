import styled from "styled-components";
export const NavbarJSX = {
    Item: styled.div`
        background:linear-gradient(90deg,#870000 0%,#190A05 100%);
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
            text-decoration:none;
            padding:0.5rem 1rem;
        }
        .nav-links:hover{
            background-color:#870000;
            border-radius:5px;
            transition:all 0.3s ease-out;
        }

        .menu-icon{
            color:#fff;
            display:none;
        }
        @media only screen and (max-width: 960px){
            position:relative;
            border-bottom: 1px solid white;
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
                background:linear-gradient(90deg,#870000 0%,#190A05 100%);;
                left:0;
                opacity:1;
                transition:all 0.5s ease;
                z-index:1;
            }
            .nav-links{
                text-align:center;
                padding:2rem;
                width:100%;
                display:table;
            }
            .nav-links:hover{
                background-color:#190A05;
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
        }
    `,
    Logo: styled.h1`
        color:#fff;
        justify-self:start;
        margin-left:10px;
        cursor:pointer;
        .react-logo{
            margin-left:0.5rem;
            font-size:2.4rem;
        }
        @media only screen and (max-width: 1022px) and (min-width: 960px){
            font-size:2.1rem;
        }
        @media screen and (max-width:960px){
            position:absolute;
            top:-10%;
            left:0;
            transform:translate(25%,50%);
        }
`
}