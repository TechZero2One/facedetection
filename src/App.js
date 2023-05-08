import './App.css';
import Navigation from './Components/Navigation/Navigation';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import ParticlesBg from 'particles-bg';
import React, { Component } from 'react';


class App extends Component {

  constructor () {
    super();
    this.state = {
      input: '',
      imageURL: '',
      box: {},
    } 
  }

  returnClarifiRequest = (imageURL) => {

    const PAT = 'b3787e1b49224477ae78285501725fcc';
    const USER_ID = 'nilakhee';       
    const APP_ID = 'my-first-application';
    const MODEL_ID = 'face-detection';
    const IMAGE_URL = imageURL;

    const raw = JSON.stringify({
      "user_app_id": {
          "user_id": USER_ID,
          "app_id": APP_ID
      },
      "inputs": [
          {
              "data": {
                  "image": {
                      "url": IMAGE_URL
                  }
              }
          }
      ]
    });

    const requestOptions = {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Authorization': 'Key ' + PAT
      },
      body: raw
   };

   return requestOptions;

  }

  calculateFaceLocation = (data) => {
    const clarifiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const inputImage = document.getElementById('inputImage');
    const width = Number(inputImage.width);
    const height = Number(inputImage.height);
    //console.log(width, height);
    //console.log(clarifiFace);
    return {
      leftCol: clarifiFace.left_col * width,
      topRow: clarifiFace.top_row * height,
      rightCol: width - (clarifiFace.right_col * width),
      bottomRow: height - (clarifiFace.bottom_row * height)
  }
}

  displayFaceBox = (box) => {
    //console.log(box);
    this.setState({box: box});
  }


 
  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }
  
  onButtonSubmit = (event) => {
    this.setState({imageURL: this.state.input});
    const requestOptions = this.returnClarifiRequest(this.state.input);

    fetch("https://api.clarifai.com/v2/models/face-detection/outputs", requestOptions)
    .then(response => {
      response.json().then(data => {
        this.displayFaceBox(this.calculateFaceLocation(data));
      })
    })
    .catch(error => console.log('error', error));

  }


  render() {
     const config = {
      particles: {
        color: {
          value: "#a13f23",
        },
        links: {
          color: "#098712",
        }
      },
      background: {
        color: {
          value: "#121",
        }
      }
    };
    
      
    return (
      <div className="App">
          <ParticlesBg color="#ffffff" num={100} config={config} type="cobweb" bg={true} />
          {/* <ParticlesBg color="#ffffff" num={100} type="cobweb" bg={true} /> */}
          <Navigation />
          <Logo/>
          <Rank/>
          <ImageLinkForm 
            onInputChange={this.onInputChange} 
            onButtonSubmit={this.onButtonSubmit}
          />
          <FaceRecognition box={this.state.box} imageURL={this.state.imageURL}/>

      </div>
    );
  } 
}


export default App;
