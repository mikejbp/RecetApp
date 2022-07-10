import React from "react";
import FooterElement from "./FooterElement";
import '../Styles/footer.css';

import { BsFacebook } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer-content">
                    <h3 className="footer-title">Contáctanos</h3>
                    <div className="footer-icons">
                        <FooterElement link={"https://facebook.com/recetapp"} Icon={()=><BsFacebook className="footer-icon"/>}/>
                        <FooterElement link={"http://"} Icon={()=><GrMail className="footer-icon"/>}/>
                        <FooterElement link={"http://wa.me/54"} Icon={()=><IoLogoWhatsapp className="footer-icon"/>}/>
                    </div>
                <p className="copy">&copy; RecetApp by Group 04 </p>
            </div>
        </footer>
    );
}
