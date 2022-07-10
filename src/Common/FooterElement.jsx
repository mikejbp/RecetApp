import React from 'react'

export default function FooterElement({Icon, link}){
  return(
    <span className="footer-container-icons">
        <a className="icons" href={link} target="_blank" rel="noopener noreferrer">
          <Icon/>
        </a>
    </span>
  )
}