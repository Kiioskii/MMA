import React from "react";
import styled from 'styled-components'
import logo from '../asets/images/logoC.png'
import PL from '../asets/images/PL.png'
import UK from '../asets/images/UK.png'
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom'
const Headr = ({getLanguage,setLanguage}) =>{
    const navigate=useNavigate();

    let aboutUs = getLanguage === "PL" ? "O NAS" : "ABOUT US";
    let contact = getLanguage === "PL" ? "kontakt" : "contact";

    let location = useLocation();

    console.log("location",location)

    const handlePL = () =>{
        setLanguage("PL")
        const url  = location.pathname.replace("Eng","");
        console.log("url",url);
        navigate(`${url}`)
    }
    const handleEng = () => {
        setLanguage("ENG")
        const url  = location.pathname.includes("Eng")? location.pathname : (location.pathname+"Eng");
        console.log("url",url);
        navigate(`${url}`)
    }

    return(
        <HeadrContainr>
            <div className="side left" onClick={(e)=>{getLanguage === "PL" ? navigate('/') : navigate('/Eng')}}>
                <img alt="logo" src={logo} className="headerLogo" />
                <h1>ASPINA</h1>
            </div>
            <div className="side right">
                <div className="header-paragraf" onClick={(e)=>{getLanguage === "PL" ? navigate('/aboutUs') : navigate('/aboutUsEng')}}>{aboutUs}</div>
                <div className="header-paragraf" onClick={(e)=>{getLanguage === "PL" ? navigate('/contact') : navigate('/contactEng')}}>{contact}</div>
                <img alt="flag" src={PL} className="header-fleg" onClick={(e)=>{handlePL()}}/>
                <img alt="flag" src={UK} className="header-fleg" onClick={(e)=>{handleEng()}}/>
            </div>
        </HeadrContainr>
    )
}

export default Headr;

const HeadrContainr = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;500;600&family=Tinos:ital@0;1&display=swap');
width: 100%;
height: 10vh;
overflow-x: unset;
/* border: 2px solid red; */
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: #8080805f;
position: -webkit-sticky;
position: sticky;
top: 0vh;
z-index: 10;
margin-top: -10vh;
/* border-bottom: 3px solid blue; */
.side{
    width: 30vw;
    height: 100%;
    height: 100%;
    /* border: 2px solid blue; */
    display: flex;
    flex-direction: row;
    align-items: center;
    h1{
        font-family: 'Tinos';
        font-size: 2vw;
    }
}
.left{
    /* border: 2px solid orange; */
    width: 25vw;
    cursor: pointer;
}
.headerLogo{
    height: 15vh;
}
.header-paragraf{
    width: 10vw;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    /* border: 2px solid brown; */
    height: 100%;
    text-transform: uppercase;
    transition: ease-in-out;
    transition: 1000ms;
    cursor: pointer;
    font-size: 1.3vw
}
.header-paragraf:hover{
    background-color: #00000066;
}
    .header-fleg{
        height: 90%;
        cursor: pointer;
        margin-right: 5px;
        margin-left: 5px;
    }
    .header-fleg:hover{
        background-color: #00000034;
        transition: ease-in-out;
    }

    @media (min-width: 1080px) and (max-width: 1536px)  {
        
        .headerLogo{
            width:8vw;
        }
        .header-fleg{
            width: 5rem;
        }
    }
    @media  (min-width: 640px) and (max-width: 1079px)  {

        .right{
            width: 50vw;
        }

        .left{
            width: 40vw;
            h1{
                font-size: 1rem;
            }
        }
        
        .headerLogo{
            width:15vw;
        }
        .header-fleg{
            width: 5rem;
        }
        .header-paragraf{
            font-size: 1rem;
            width: 20vw;
        }
    }
    @media screen and (max-width: 640px)  {
        
        .right{
            width: 60vw;
        }

        .left{
            width: 30vw;
            h1{
                font-size: 0.8rem;
            }
        }
        
        .headerLogo{
            width:20vw;
        }
        .header-fleg{
            width: 3rem;
        }
        .header-paragraf{
            font-size: 0.7rem;
            width: 15vw;
        }
    }


`