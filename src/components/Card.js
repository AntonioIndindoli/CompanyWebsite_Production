import React from 'react';
import { useNavigate } from "react-router-dom";
const Card = ({ imageSrc, caption, link }) => {
    const navigate = useNavigate();

    const isExternalLink = link.startsWith('http');
    const handleClick = (e) => {
        if (!isExternalLink) {
            navigate(link);
        }
    };

    return (
        isExternalLink ? (
            <a href={link} className="nav-button-card">
                <CardContents imageSrc={imageSrc} caption={caption}/>
            </a>
        ) : (
            <button
                className="nav-button-card"
                onClick={handleClick}
            >
                <CardContents imageSrc={imageSrc} caption={caption}/>
            </button>
        )
    );
};

const CardContents = ({ imageSrc, caption }) => (
    <div className="card-div">
        <img src={imageSrc} alt={caption} className="card-image"/>
        {caption}
    </div>
);


export default Card;
