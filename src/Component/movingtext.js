import React, { Component } from "react";
import Photo from "./photo";
import "./movingtext.css";


class MovingText extends Component{
    render(){
        return(
            <div class= "text-box">

<h1 class= "text">
  <span class="typewriter-text">
    View Rooms Pictures Below ...
  </span>  
</h1>  

         <Photo />
          
            </div>
        )
    }
    
}



export default MovingText;