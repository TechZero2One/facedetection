import React from "react";
import "./faceRecognition.css";

const FaceRecognition = ({imageURL, box}) => {
    return (
        // <div className="relative">
        //     <img id="inputImage" src={imageURL} alt="face recognition" />
        //     <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        // </div>

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