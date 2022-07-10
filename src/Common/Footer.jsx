import React from "react";
import FooterElement from "./FooterElement";
import '../Styles/footer.css';

import { BsGithub, BsLinkedin } from 'react-icons/bs';

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer-content">
                    <h3 className="footer-title">Contáctanos</h3>
                    <div className="footer-icons">
                        <FooterElement 
                        link={"https://www.linkedin.com/in/miguelbricenodev/"} 
                        Icon={()=><BsLinkedin className="footer-icon"/>}/>
                        <FooterElement 
                        link={"https://github.com/mikejbp/RecetApp"} 
                        Icon={()=><BsGithub className="footer-icon"/>}/>
                        <FooterElement 
                        link={"https://www.linkedin.com/in/flor-talavera/"} 
                        Icon={()=><BsLinkedin className="footer-icon"/>}/>
                    </div>
                <p className="copy">&copy; RecetApp by Group 04 </p>
            </div>
        </footer>
    );
}
