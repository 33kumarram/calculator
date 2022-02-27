import React from "react";
import './header.scss'
import { Link } from "react-router-dom";
export const Header=()=>{
    return(
        <div className="head">
            <h2>Ramesh Kumar</h2>
            <div className="links">
            <Link className="link" to='/Rk/'>About</Link>
            <Link className="link" to ='/education'> Education </Link>
            <Link className="link" to='/projects'>Projects</Link>
            <Link className="link" to='/connect'>Connect</Link>
            </div>
             
        </div>
    )
}