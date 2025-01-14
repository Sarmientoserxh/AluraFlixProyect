import React, { useState } from "react";
import styled from "styled-components";
import BannerImage from "/images/banner.png";

const Div = styled.div`
    background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.6)
    ),
    url(${BannerImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin: 0;
    width: 100%;
    min-height: 832px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    flex-wrap: wrap;
    box-sizing: border-box;
`;

const Button = styled.button`
    margin: auto;
    background: #6bd1ff;
    color: #f5f5f5;
    font-size: 20px;
    font-weight: bold;
    padding: 10px 50px;
    border-radius: 15px;
    border: 5px solid transparent;
    box-shadow: 0 0 15px 3px rgba(107, 209, 255, 0.8);
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background: #4baedf;
        transform: scale(1.05);
    }
`;

const Content = styled.div`
    display: flex;
    flex-wrap: wrap; /* Permite que los elementos bajen si no hay espacio */
    gap: 20px;
    max-width: 1200px;
    width: 100%;
    color: #f5f5f5;
    justify-content: space-between; /* Alinea los elementos al centro horizontalmente */
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 600px; 
    width: 100%; 
    text-align: left; 

    h1 {
        font-size: 46px;
        font-weight: bold;
        margin: 0;
    }

    p {
        font-size: 18px;
        line-height: 1.5;
        margin: 0;
    }
`;

const Card = styled.div`
    border-radius: 15px;
    width: 100%; 
    max-width: 600px; 
    aspect-ratio: 16 / 9; 
    overflow: hidden;
    position: absolute;
    right: 80px;
    border: 5px solid transparent;
    background: linear-gradient(45deg, #6bd1ff, #00c3ff);
    box-shadow: 0 0 15px 3px rgba(107, 209, 255, 0.8);
    transition: all 0.3s ease-in-out;

    &:hover {
        box-shadow: 0 0 25px 6px rgba(107, 209, 255, 1);
    }

    .frame-container {
        width: 100%;
        height: 100%;
        position: relative;
        background-color: #000;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    iframe {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 10px;
    }
`;



const Banner = () => {
    const [showVideo, setShowVideo] = useState(false);

    const handleVideoClick = () => {
        setShowVideo(true);
    };

    return (
        <Div>
            <Content>
                <TextContainer>
                    <Button>Front End</Button>
                    <h1>Challenge React</h1>
                    <p>
                        Este challenge es una forma de aprendizaje. Es un mecanismo donde
                        podrás comprometerte en la resolución de un problema para poder
                        aplicar todos los conocimientos adquiridos en la formación React.
                    </p>
                </TextContainer>
                <Card>
                    {!showVideo ? (
                        <div className="frame-container" onClick={handleVideoClick}>
                            <iframe width="560" height="315"
                                    src="https://www.youtube.com/embed/ov7vA5HFe6w?si=Wz5ba222lGoWfPDG"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    ) : (
                        <iframe
                            src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    )}
                </Card>
            </Content>
        </Div>
    );
};

export default Banner;
