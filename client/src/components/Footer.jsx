import React from "react";
import styled from 'styled-components'

const Footer = () =>{

    return(
        <FooterContainr>
            <div className="left side">
                <div>
                    <h1>Kontakt:</h1>
                    <p>Email: contact@aspinaweb.com</p>
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
        font-size: 1.4rem ;
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
        font-size: 1.4rem ;
    }
    p{
        margin: 0;
        margin-right: 2vw;
        font-size: 1rem;
    }
}
@media (min-width: 1080px) and (max-width: 1536px)  {
        
    h1{
        font-size: 2rem ;
    }
    p{
        font-size: 1rem;
    }
}
    @media (min-width: 640px) and (max-width: 1079px)  {
        .side{
            width: 50vw;
        }
        h1{
        font-size: 3rem ;
         }
        p{
            font-size: 1.1rem;
        }
    }
    @media screen and (max-width: 640px)  {
        .side{
            width: 50vw;
        }
        h1{
        font-size: 1rem ;
        }
        p{
            margin: 0;
            margin-right: 2vw;
            font-size: 0.8rem;
        }
        .right{
            h1{
                font-size: 1.4rem ;
            }
            p{
                margin: 0;
                margin-right: 2vw;
                font-size: 1rem;
            }
        }
       
    }
`