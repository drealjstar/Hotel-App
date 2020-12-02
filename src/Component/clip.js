import React, { Component } from "react";
import Card from './card';


class Clip extends Component {
  

  render() {
    return (
      <div className= "container">
        
      <div className= "home-page">
     <div className= "headers">
         <h1 className= "header-one">Our Services</h1>

         <div className= "list">
           <h1 className= "header-two">HOTEL</h1>
           <h4 className= "header-three">DE STAR IS THE RIGHT PLACE</h4>
          </div>
        
        </div>
       <h2>Special Home</h2>
        </div>

        <Card />
            
      </div>
    );
  }
}

export default Clip;
