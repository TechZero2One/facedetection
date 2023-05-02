import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import ParticlesBg from 'particles-bg';
import React, { Component } from 'react';


class App extends Component {

  constructor () {
    super();
    this.state = {
      input: ''
    } 
  }

 

  onInputChange = (event) => {
    console.log(event);
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
            <ImageLinkForm onInputChange={this.onInputChange}/>
            {/* {
              onInputChange={this.onInputChange}
                  <FaceRecognition />} */}

        </div>
     );
  } 
}


export default App;
