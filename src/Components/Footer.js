import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    const links = [
        {icon: faLinkedinIn, link: "https://www.linkedin.com/in/jordan-reeves-9bb0411b5/"},
        {icon: faGithub, link: "https://github.com/Jordan-Reeves"},
        {icon: faEnvelope, link: "mailto:jar5927@rit.edu"},
    ];
  return (
    <footer id="contact" className='w-full text-black bg-[#6cd1d8] flex flex-col items-center'>
        <ul className='flex items-center'>
            {
                links.map((link) => 
                    <li className='text-3xl px-3 py-3'><a href={link.link}><FontAwesomeIcon icon={link.icon} /></a></li>
                )
            }
        </ul>
        <p>@2023 Jordan Reeves</p>
    </footer>
  )
}
