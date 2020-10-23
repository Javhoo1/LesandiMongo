import React from 'react';
import {IconoFacebook, IconoInstagram, IconoEmail} from '../Img/Icons';

export default function Footer() {
  return (
    <header>      
      <nav>
          <ul className="footerBox">            
            <span className="footerText">Lesandi Web</span>
            <br/> <br/>
            <a href="https://www.facebook.com" className="footerIcono"><IconoFacebook/></a>
            <a href="https://www.instagram.com" className="footerIcono"><IconoInstagram/></a>
            <a href="https://www.gmail.com" className="footerIcono"><IconoEmail/></a>           
            <br/> <br/> 

            <span className="footerCopyright">Copyright 2020. All rights reserved.</span>
          </ul>        
      </nav>
    </header>
  );
}