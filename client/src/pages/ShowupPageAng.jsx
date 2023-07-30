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

const ShowupPageAng = () => {
    const content = {
        rozoj:"We are advancing the world because we are constantly advancing ourselves! Our company consists of passionate specialists for whom growth is both the goal and the path. Everything we do stems from our genuine passion for what we create.",
        organizacja:"Our team is a cohesive group of experts who are the best in their respective fields. We are programmers, designers, marketers, analysts, and many other specialists, who come together to achieve exceptional results.",
        stabilniosc:"Stability that makes a difference! Our company is not only about growth but also about building lasting relationships with our clients. Each client is unique to us, and that's why we approach each one individually, providing full support and customization to meet your needs.",
        zaufanie:"Our company is a place where passion meets commitment, and creativity harmonizes with determination. We believe that the key to success is a constant pursuit of excellence and the exploration of new possibilities.",
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
                                    <SlideTemplate img={gears} title="Development" />
                            </div>
                            <div className="propozytion" onClick={()=>handleChangeBacground("video2",content.organizacja)}>
                                <SlideTemplate img={latarnia} title="Organization"/>
                            </div>
                            <div className="propozytion" onClick={()=>handleChangeBacground("video3",content.stabilniosc)}>
                                    <SlideTemplate img={anchor} title="Stability" />
                            </div>
                            <div className="propozytion" onClick={()=>handleChangeBacground("video4",content.zaufanie)} >
                                    <SlideTemplate img={piorko} title="Trust"/>
                            </div>
                        </div>
                    </div>
            </div>
    </ShowupContainer>
    )
}

export default ShowupPageAng;

const ShowupContainer = styled.div` 
/* z-index: -100; */
    overflow-x: hidden;
    overflow-y: unset;  
    background-color: #2e2e2e;
    width: 100vw;
    height: 100vh;
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
        }

    }
    @media (min-aspect-ratio: 16/9){
        .videoBCG{
            width: 100%;
            height: auto;
        }
        
    }

`