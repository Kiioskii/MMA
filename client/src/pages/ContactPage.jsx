import React from "react";
import styled from 'styled-components'
const ContactPage = () =>{

    return(
        <ContactContainer>
            <div className="border-contact">
                <div className="part left">
                    <div className="foundors">
                        <div className="title-contact-div">
                            Zalożyciele
                        </div>
                        <div className="foundors-cnotent">
                            <div>
                                <h2>Mikołaj Golowski</h2>
                                <p>Linkedin: <a href="https://pl.linkedin.com/in/miko%C5%82aj-golowski-a26939208">Zobacz profil</a></p>
                            </div>
                            <div>
                                <h2>Antoni Pochopień</h2>
                                <p>Linkedin: <a href="https://pl.linkedin.com/in/antoni-pochopie%C5%84-2033601b9">Zobacz profil</a></p>
                            </div>
                            <div>
                                <h2>Maciej Kijowski</h2>
                                <p>Linkedin: <a href="https://pl.linkedin.com/in/maciej-kijowski-392708260">Zobacz profil</a> </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="part right">
                    <div className="foundors">
                        <div className="title-contact-div">
                            Kontakt
                        </div>
                        <div className="foundors-cnotent">
                            <div>
                                <h2>Email:</h2>
                                <p>contact@aspinaweb.com</p>
                            </div>
                            <div>
                                <h2>Nr. kontaktowy:</h2>
                                <p>+48 792 727 370 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContactContainer>
    )
}

export default ContactPage;

const ContactContainer = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;500;600&family=Tinos:ital@0;1&display=swap');
height: 100vh;
width: 100%;
/* border: 2px solid red; */
background-image: url("https://images.unsplash.com/photo-1502239608882-93b729c6af43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80");
background-position: center;
background-repeat: no-repeat;
background-attachment: fixed;
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
color: white;
.border-contact{
    width: 70vw;
    height: 70vh;
    border: 3px solid white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    -webkit-box-shadow: 14px 13px 24px 3px rgba(66, 68, 90, 1);
-moz-box-shadow: 14px 13px 24px 3px rgba(66, 68, 90, 1);
box-shadow: 14px 13px 24px 3px rgba(66, 68, 90, 1);
}
.left{
    border-right: 3px solid white;
}
.part{
    width: 50%;
    height: 100%;
    /* border: 2px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
}
.foundors{
    width: 100%;
    height: 60%;
    /* border: 2px solid red; */
}
.title-contact-div{
    width: 100%;
    height: 10vh;
    /* border:2px solid blue; */
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size:2vw;
}.foundors-cnotent{
    width: 100%;
    height: 80%;
    div{
        height: 30%;
        /* border: 2px solid green; */
        padding-left: 2vw;
        line-height: 1vh;
        h2{
            font-size: 1.5vw;
        }
        p{
            font-size: 1.1vw;
        }
        a{
            color: grey;
        }
    }
}

    @media  (min-width: 640px) and (max-width: 1079px)  {

        
        .foundors-cnotent{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 100%;
                div{
                    width: 70%;
                    h2{
                        font-size: 1rem;
                    }
                    p{
                        font-size: 0.7rem;
                    }
                }
        }
        .title-contact-div{
            font-size: 2rem;
        }
       
    }
    @media screen and (max-width: 640px)  {
        .border-contact{
            flex-direction: column;
        }
        .left{
            border: none;
        }
        .part{
            width: 100%;
            height: 50%;
        }
        .title-contact-div{
            font-size: 1.3rem;
            margin: 0;
            padding: 0;
            height: auto;
            margin-bottom: 2vh;
        }

        .foundors-cnotent{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: auto;
                div{
                    height: 8vh;
                    width: 70%;
                    h2{
                        font-size: 1rem;
                    }
                    p{
                        font-size: 0.7rem;
                    }
                }
        }
        
      
    }
`