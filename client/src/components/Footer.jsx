import React from "react";
import styled from 'styled-components'

const Footer = () =>{

    return(
        <FooterContainr>
            <div className="left side">
                <div>
                    <h1>Kontakt:</h1>
                    <p>Email: emailFirmowy@firma.com/pl</p>
                    <p>Nr. kontaktowy: +48 792 727 370</p>
                </div>
            </div>
            <div className="right side">
                <h1>Założyciele:</h1>
                 <p>Mikołaj Golowski</p>
                 <p>Antoni Pochopień</p>
                 <p>Maciej Kijowski</p>
            </div>
            
        </FooterContainr>
    )
}

export default Footer;

const FooterContainr = styled.div`
height: 20vh;
width: 100%;
/* border: 2px solid red; */
background-color:#383839;
color: #c6c9cd;
display: flex;
justify-content: space-between;
flex-direction: row;
.side{
    width: 40%;
    height: 100%;
    /* border: 2px solid red; */
}
.left{
    width: 30%;
    h1{
        font-size: 2vw ;
    }
    div{
        display: flex;
        justify-content: left;
        flex-direction: column;
        font-size: 1vw;
        p{
            margin: 0;
            margin-left: 2vw;
        }
    }
}
.right{
    display: flex;
    text-align: right;
    flex-direction: column;
    margin-right: 2vw;
    h1{
        font-size: 2vw ;
    }
        p{
            margin: 0;
            margin-right: 2vw;
            font-size: 1vw;

        }
}
`