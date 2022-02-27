import React from "react";
import './projects.scss'

export const Projects =()=>{
    return(
        <div className="projects">
            <div className="project" onClick={()=>window.location.href = 'https://github.com/33kumarram/crwn-clothing.git'}>E-Commerce website</div>     
            <div className="project" onClick={()=>window.location.href = 'https://33kumarram.github.io/monster-rolodex/'}>Monsters Rolodex website</div>     
            <div className="project" onClick={()=>window.location.href = 'https://33kumarram.github.io/shopapp/'} >Responsive App</div>     
            <div className="project" onClick={()=>window.location.href = 'https://33kumarram.github.io/imageslider/'} >Image-Slider</div>     
            <div className="project" onClick={()=>window.location.href = 'https://33kumarram.github.io/quizapp/'}  >Quiz App</div>     
            <div className="project" onClick={()=>window.location.href = 'https://33kumarram.github.io/calculator/'}  >Basic Calculator</div>     
        </div>
    )
}