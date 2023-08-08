import React from "react";
import styled from 'styled-components'
import "../style/style.scss"
import anchor from "../asets/images/anchorC.png"
import piorko from "../asets/images/piorkoC.png"
import latarnia from "../asets/images/latarniaC.png"
import gears from "../asets/images/gearsC.png"
import SlideTemplate from "../components/SlideTemplate"; 
import sky from "../asets/video/sky.mp4"
import ocean from "../asets/video/ocean.mp4"
import lake from "../asets/video/lake.mp4"
import city from "../asets/video/city.mp4"
import "../style/video.css"
import { CSSTransition } from 'react-transition-group';

const videos = {
    video1: city,
    video2: lake,
    video3: ocean,
    video4: sky,
  };

const ShowupPage = () => {
    const content = {
        rozoj:"Rozwijamy świat, bo rozwijamy się sami! Nasza firma to zapaleni pasją specjaliści, dla których rozwój jest jednocześnie celem i drogą. Wszystko, co robimy, wynika z naszej autentycznej pasji do tego, co tworzymy.",
        organizacja:"Nasz zespół to zgrana ekipa ekspertów, którzy są najlepsi w swoich dziedzinach. Jesteśmy programistami, projektantami, marketingowcami, analitykami i wieloma innymi specjalistami, którzy łączą siły, aby osiągnąć wyjątkowe wyniki.",
        stabilniosc:"Stabilność, która tworzy różnicę! Nasza firma jest nie tylko o rozwijaniu się, ale również o budowaniu trwałych relacji z naszymi klientami. Każdy klient jest dla nas wyjątkowy, dlatego podchodzimy do każdego indywidualnie, zapewniając pełne wsparcie i dostosowanie do Twoich potrzeb.",
        zaufanie:"Nasza firma to miejsce, gdzie pasja spotyka się z zaangażowaniem, a pomysłowość współgra z determinacją. Wierzymy, że kluczem do sukcesu jest nieustanne dążenie do doskonałości i odkrywanie nowych możliwości.",
    }
    const [selectedVideo, setSelectedVideo] = React.useState('video1');
    const [getText, setText] = React.useState(content.zaufanie);

    const handleChangeBacground = (video,about) => {
        console.log("getText",getText);
            setText(about)
            setSelectedVideo(video)
    }   

    return(
    <ShowupContainer>
            <div className="Segment bcgV">
                {Object.keys(videos).map((videoName) => (
                    <CSSTransition
                        key={videoName}
                        in={selectedVideo === videoName}
                        // timeout={1000}
                        classNames="fade"
                        appear={true}
                        unmountOnExit
                    >
                        <video autoPlay loop muted  className="videoBCG">
                            <source src={videos[videoName]} type="video/mp4" />
                        </video>
                    </CSSTransition>
                ))}

                <div className="text-div">
                    {getText}
                </div>
                

                    <div className="box">               
                        <div className="main-part">
                            <div className="propozytion" onClick={()=>handleChangeBacground("video1",content.rozoj)}>
                                    <SlideTemplate img={gears} title="Rozwój" />
                            </div>
                            <div className="propozytion" onClick={()=>handleChangeBacground("video2",content.organizacja)}>
                                <SlideTemplate img={latarnia} title="Organizacja"/>
                            </div>
                            <div className="propozytion" onClick={()=>handleChangeBacground("video3",content.stabilniosc)}>
                                    <SlideTemplate img={anchor} title="Stabilność" />
                            </div>
                            <div className="propozytion" onClick={()=>handleChangeBacground("video4",content.zaufanie)} >
                                    <SlideTemplate img={piorko} title="Zaufanie"/>
                            </div>
                        </div>
                    </div>

            </div>
            {/* <div className="Segment">

            </div> */}

    </ShowupContainer>
    )
}

export default ShowupPage;

const ShowupContainer = styled.div` 
/* z-index: -100; */
    overflow-x: hidden !important;
    overflow-y: unset !important;  
    scroll-behavior: unset;
    background-color: #2e2e2e;
    width: 100vw !important;
    height: 100vh !important;
    overflow-x: unset;
    margin: 0;
    /* border: 2px solid red; */
    .header-part{
        font-family: "Roboto";
        /* border: 2px solid yellow; */
        width: 100%;
        height: 25vh;
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        text-transform: uppercase;
        font-size: 2vw;

    }
    .Segment{
        /* z-index: -3; */
        background-color: #2e2e2e;
        height: 100vh;
        width: 100vw;
        /* border: 3px solid blue; */
        margin-top: -20vh;
    }
    .bcgV{
        position: relative;
    }
    .box{
        position: absolute;
        background-color: #ffffff36;
        top: 86vh;
        right: 2vw;
        width: 49vw;
        height: 31vh;
        border: 3px solid black;
        border-radius: 15px;
        z-index: 2;
        padding-left: 2vw;
        padding-right: 2vw;
        padding-top: 3vh;
        padding-bottom: 3vh;
    }
    .main-part{
        display: flex;
        flex-direction: row;
        gap: 2vw;
        width: 100%;
        height: 100%;
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
    .propozytion{
        width: 30%;
        height: 100%;
        border: 3px solid black;
        border-radius: 7px;
        background-image: url(anchor);
        background-position:  0 0;
        background-repeat: no-repeat;
        background-size: 90%;
        /* background-attachment: fixed; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
       -webkit-box-shadow: 16px 23px 61px -27px rgba(66, 68, 90, 1);
        -moz-box-shadow: 16px 23px 61px -27px rgba(66, 68, 90, 1);
        box-shadow: 16px 23px 61px -27px rgba(66, 68, 90, 1);
        &:hover{
            background-color: #0000002a;
            transition: ease-in-out;
            transition: 1500;
        }
    }
    .videoBCG{
        width: 100%;
        /* height: 100%; */
        object-fit: cover;
        z-index: 1;
    }
    .btn{
        width: 30vw;
        height: 10vh;
        cursor: pointer;
        background-color: green;
    }
    .text-div{
        border: 3px solid black;
        border-radius: 15px;
        width: 40vw;
        height: 40vh;
        position: absolute;
        top: 40vh;
        left: 5vw;
        z-index: 20;
        padding: 2vh;
        text-align: center;
        color: white;
        font-size: 1.3vw;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        line-height: 4vh;
        letter-spacing: 2px;
        background-color: #0000006f;
    }
    @media (max-aspect-ratio: 16/9){
        .videoBCG{
            width: auto;
            height: auto;
            overflow-y: unset;
        overflow-x: unset;
        }
        overflow-y: unset;
        overflow-x: unset;
        scroll-behavior: unset;

    }
    
    @media (min-width: 1080px) and (max-width: 1536px)  {
        overflow-y: unset;
        overflow-x: unset;

    }
    @media  (min-width: 640px) and (max-width: 1079px)  {
        .box{

        top: 95vh;
        right: 5vw;
        width: 80%;
        height: 31vh;
        z-index: 2;
        padding-left: 2vw;
        padding-right: 2vw;
        padding-top: 3vh;
        padding-bottom: 3vh;
    }
    .text-div{
        width: 50vw;
        height: 40vh;
        top: 40vh;
        left: 5vw;
        z-index: 20;
        font-size: 0.7rem;
        line-height: 3vh;
        letter-spacing: 2px;
    }

    }
    @media  (max-width: 640px)  {
        .box{
            top: 95vh;
            right: 5vw;
            width: 90%;
            height: 31vh;
            z-index: 2;
            padding-left: 2vw;
            padding-right: 2vw;
            padding-top: 3vh;
            padding-bottom: 3vh;
        }
        .text-div{
        width: 60vw;
        height: 40vh;
        top: 40vh;
        left: 5vw;
        z-index: 20;
        font-size: 0.7rem;
        line-height: 3vh;
        letter-spacing: 2px;
    }

    }


`