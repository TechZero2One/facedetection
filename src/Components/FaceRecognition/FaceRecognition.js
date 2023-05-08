import React from "react";
import "./faceRecognition.css";

const FaceRecognition = ({imageURL, box}) => {
    return (

        <div className="center">
            <div className="relative">
                <img id="inputImage" alt='' src={imageURL}/>
                <div className="bounding-box" style={{
                    top: box.topRow, 
                    left: box.leftCol,
                    bottom: box.bottomRow,
                    right: box.rightCol 
                }}>
                </div>
            </div>
        </div>

    );
}

export default FaceRecognition;