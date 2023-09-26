import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX ,faBars } from '@fortawesome/free-solid-svg-icons'
import resume from "../media/Resume-Jordan Reeves-9-26-23.pdf"

export default function Nav() {
  const links = [
    {name: "About", link: "#aboutMe"},
    {name: "Projects", link: "#projects"},
    {name: "Resume", link: resume},
    {name: "Contact", link: "#contact"},
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className='fixed top-0 left-0 w-full text-black bg-[#6cd1d8]'>
      <div className='md:flex items-center justify-between md:flex-row py-2 md:px-10 px-7'>
        <div className='cursor-pointer flex items-center'>
          <h1 className='text-4xl'>JR</h1>
        </div>
        <div className='text-3xl absolute right-7 top-2 cursor-pointer md:hidden' onClick={() => setOpen(!open)}>
          <FontAwesomeIcon icon={open ? faX : faBars} />
        </div>
        <ul className={`md:flex md:items-center absolute md:static bg-[#6cd1d8] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-7 transition-all duration-500 ease-in ${open ? 'top-10 opacity-100': 'top-[-200px]'} md:opacity-100 opacity-0`}>
        {
          links.map((link) =>
            <li key={link.name} className='md:ml-8 text-md md:my-0 my-5'>
              <a href={link.link}>{link.name}</a>
            </li>
          )
        }
        </ul>
      </div>

    </div>
  )
}
