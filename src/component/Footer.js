import React from "react";
import facebook from '../image/FacebookIcon.png';
import twitter from '../image/TwitterIcon.png';
import instagram from '../image/InstagramIcon.png';
import github from '../image/GitHubIcon.png';
 export default function Footer(){
     return(
        <div className="footer">
      <img src={twitter} alt="Twitter" />
      <img src={facebook} alt="Facebook" />
      <img src={instagram} alt="Instagram" />
      <img src={github} alt="GitHub" />
    </div>
     )
 }