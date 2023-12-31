import React from "react";
import styled from 'styled-components'
import landingPageIcon from "../asets/images/landing_page_icon.png"
import "../style/style.scss"
import { useNavigate } from "react-router-dom";
const StartPage = () =>{
    const navigate=useNavigate();

    const [windowSize, setWindowSize] = React.useState([
        window.innerWidth,
        window.innerHeight,
      ]);

      React.useEffect(() => {
        const handleWindowResize = () => {
          setWindowSize([window.innerWidth, window.innerHeight]);
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      });

    return(
        <StartPageContainr>
            <div className="Segment first">
                {
                    windowSize[0] <= 520 ? (
                        <div className="right-side side">
                            <img alt="landing-page-icon"  className="first-segment-img" src={landingPageIcon} />
                        </div>
                    ):(
                        <>
                        </>
                    )
                }
                <div className="left-side side">
                    <div className="landing-cytat">
                        <h1>ASPINA-TECH</h1>
                        <p>Dreaming of a strong online presence? We are your key to success! Our company specializes in creating dream websites that serve as the foundation for your online brand.</p>
                        <button className="btn" onClick={(e)=>{navigate('/aboutUs')}}>Let's begin!</button>
                    </div>
                </div>
                {
                    windowSize[0] >520 ? (
                        <div className="right-side side">
                            <img alt="landing-page-icon" src={landingPageIcon} style={{width:"45vw"}} />
                        </div>
                    ):(
                        <>
                        </>
                    )
                }
            </div>
            <div className="Segment second">
                <div className="left-side side wid-60" >
                    <div className="imgDiv" id="codeIMG" />
                </div>
                <div className="right-side side">
                    <div className="landing-cytat">
                        <h1>We help in development</h1>
                        <p>Collaborating with us ensures that your application will comply with the latest standards and be ready to meet future requirements. Our knowledge and experience allow us to avoid pitfalls that less experienced developers might encounter.</p>
                    </div>
                </div>
            </div>
            <div className="Segment third">
                <div className="right-side side">
                    <div className="landing-cytat">
                        <h1>Passion unites us</h1>
                        <p>We are a team of enthusiasts for whom work is not just a duty but also joy and fulfillment. We create web applications that combine perfect design, advanced technology, and a thoughtful user interface.</p>
                    </div>
                </div>
                <div className="left-side side imgHolder">
                    <div className="imgDiv"id="laptopIMG"/>
                </div>
            </div>
            <div className="Segment second">
            {
                    windowSize[0] <= 520 ? (
                        <div className="landing-cytat">
                        <h1>We are versatile</h1>
                        <p>Open your doors to success with our comprehensive web and mobile applications! Our company specializes in creating advanced solutions that comprehensively allow you to attract new customers and grow your business..</p>
                    </div>
                    ):(
                        <>
                        </>
                    )
            }
                <div className="left-side side wid-60" >
                    <div className="imgDiv" id="codeIMG slim" style={{backgroundImage:"url(https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=629&q=80"}}/>
                </div>
                {
                    windowSize[0] >520 ? (
                        <div className="right-side side">
                              <div className="landing-cytat">
                                <h1>We are versatile</h1>
                                <p>Open your doors to success with our comprehensive web and mobile applications! Our company specializes in creating advanced solutions that comprehensively allow you to attract new customers and grow your business..</p>
                            </div>
                        </div>
                    ):(
                        <>
                        </>
                    )
                }
            </div>

        </StartPageContainr>
    )
}

export default StartPage;

const StartPageContainr = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,300&display=swap');
overflow-x: unset;
    width: 100vw;
    height: auto;
    overflow-x: unset;
    margin: 0;
    .Segment{
        height: 100vh;
        /* border: 3px solid blue; */
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .side{
        height: 100vh;
        width: 50vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .left-side{
        /* border: 2px solid green; */
    }
    .right-side{
        /* border: 2px solid blue; */
    }
    .wid-60{
        width: 60vw;
    }
    .landing-cytat{
        /* border: 3px solid #3750CB; */
        border-radius: 10px;
        width: 40vw;
        height: 50vh;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        h1{
            font-family: "Roboto";
            color: black;
            font-size: 2.5vw;
            text-transform: uppercase;
        }
        p{
            font-size: 3vh;
            line-height:4vh ;
        }   
        /* background-color: #f5deb32f; */
    }
    .btn{
        width: 20vw;
        height: 10vh;
        border: 3px solid black;
        background-color: #3750CB;
        text-transform: uppercase;
        font-size: 1.3vw;
        letter-spacing: 2px;
        color: white;
        border-radius: 100px;
        margin-top: 2vh;
        cursor: pointer;
    }
    .btn:hover{
        background-color: #2f45b4;
    }
    .segmnt-img{
        width: 100%;
        z-index: 1;
        /* border: 2px solid blue; */
        margin: 0;
    }
    .segment-text{
        /* border: 2px solid red; */
        height: 15vh;
        width: 100%;
        z-index: 10;
        background-color: #00000049;
        margin: 0;
        position: relative;
    }
    .second{
        background: rgb(55,80,203);
        background: linear-gradient(6deg, rgba(55,80,203,0.6290849103313201) 0%, rgba(255,255,255,0.813958859911152) 60%);
    }
    .third{
        background: rgb(55,80,203);
        background: linear-gradient(175deg, rgba(55,80,203,0.6290849103313201) 0%, rgba(255,255,255,0.813958859911152) 60%); 
    }
    .forth{
        flex-direction: column;
    }
    .imgDiv{
        height: 90vh;
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        /* background-attachment: fixed; */
        /* border: 2px solid blue; */
    }
    .imgHolder{
        display: flex;
        /* justify-items: center; */
        /* justify-content: center; */
        align-items: center;
        align-content: center;
        /* border: 5px solid red; */
    }
    #slim{
        width: 70%;
    }
    #codeIMG{
        background-image: url("https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80");
    }
    #laptopIMG{
        background-image:url("https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1120&q=80");
    }
    @media (min-width: 1080px) and (max-width: 1536px) {
        
    }
    @media  (min-width: 640px) and (max-width: 1079px)  {
        .landing-cytat{
            width: 50vw;
            height: 70vh;
            margin-left: 2vw;
            h1{
                font-size: 2rem;
            }
            p{
                font-size: 1.2rem;
                /* line-height: 3vw; */
            }
        }
        .btn{
            width: 30vw;
            height: 10vh;
            font-size: 1.2rem;
        }

    }
    @media (max-width: 640px) and (min-width: 360px)  {
        .landing-cytat{
            width: 50vw;
            h1{
                font-size: 2rem;
            }
            p{
                font-size: 1rem;
                line-height: 3vw;
            }
        }
        .btn{
            width: 30vw;
            font-size: 1.2rem;
        }

    }
    @media (max-width: 520px)  {
        
        .Segment{
            flex-direction: column;
        }
        .first-segment-img{
            width: 70vw;
        }
        .side{
            width: 100%;
            margin-left: 2vw;
            margin-right: 2vw;
        }
        .landing-cytat{
            width: 100%;
            /* border: 2px solid; */
            h1{
                font-size: 2.5rem;
                margin-bottom: 5px;
            }
            p{
                margin-top:0;
                font-size: 1.3rem;
                line-height:1.5rem;
            }
        }
        .btn{
            width: 50vw;
            font-size: 1.2rem;
        }
        .second{
            border-bottom: 3px solid black;
            
            
        }
        .imgDiv{
            height: 50vh;
        }
        #slim{
            width: 100%;
        }
        

    }
`