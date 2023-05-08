import React from "react";
import "./faceRecognition.css";

const FaceRecognition = ({imageURL}) => {
    return (
        <div className="center">
            <img id="inputImage" src={imageURL} alt="face recognition" />
        </div>

    );
}

export default FaceRecognition;