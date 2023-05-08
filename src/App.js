import './App.css';
import Navigation from './Components/Navigation/Navigation';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import ParticlesBg from 'particles-bg';
import React, { Component } from 'react';
import SampleImages from './Components/SampleImages/SampleImages';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';

class App extends Component {

  constructor () {
    super();
    this.state = {
      input: '',
      imageURL: '',
      box: {},
      route: "signin",
      isSignedIn: false
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

  onRouteChange = (route) => {
    
    
    if (route === "signout"){
      this.setState({isSignedIn: false});
    }else if (route === "home"){ 
       this.setState({isSignedIn: true});
    }
    
    this.setState({route: route});
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

     const {box, imageURL, route, isSignedIn} = this.state;

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
          <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
          <Logo/>

          { route === "home"
            ? <div>
                
                <Rank/>
                <ImageLinkForm 
                  onInputChange={this.onInputChange} 
                  onButtonSubmit={this.onButtonSubmit}
                />
                <FaceRecognition box={box} imageURL={imageURL}/>
                <SampleImages />
              </div>
            : (
              route === "signin"
              ? <SignIn onRouteChange={this.onRouteChange}/>
              : <Register onRouteChange={this.onRouteChange}/>
            )            
          } 
      </div>
    );
  } 
}


export default App;
