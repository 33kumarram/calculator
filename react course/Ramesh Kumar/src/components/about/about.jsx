import React from "react";
import pic from '../assets/self.png'
import './about.scss'


export const About =()=>{
    return(
       <div className="container">
            <img src={pic} alt="My Pic" />
            <span>Hii, Myself Ramesh Kumar. I am from Jaipur, Rajasthan. I have completed my schooling from R.B.S.E board with 85% marks and appeared in JEE Mains 2016 and secured  AIR 4262 with 194 marks. I have completed my B.tech Civil from NIT, Surat. Then Learnt about HTML, CSS, JavaScript and React Js. Mainly working in React Js. Done six projects in React Js.  </span>
       </div>

    )
}