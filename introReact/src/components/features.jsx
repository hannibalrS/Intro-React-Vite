import React from "react";
import "./features.css"

const Features = () => {
    const features = [  
        {
            title: "Característica 1",
            description: "Descripción de la primera funcionalidad",
            image: "public/1.jpg"
        },
        {
            title: "Característica 2",
            description: "Descripción de la segunda funcionalidad",
            image: "public/2.jpg"
        },
        {
            title: "Característica 3",
            description: "Descripción de la tercera funcionalidad",
            image: "public/3.jpg"
        },
    ];

    return (
        <div className="features-container">
            {features.map((feature, index) => (
                <div key={index} className="feature-item">
                    <img src={feature.image} alt={feature.title} className="feature-image"/>
                    <div className="feature-text">
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Features;
