import React from 'react'
import './footer.css'
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <>

      <div className="divider">
        Join Us
      </div>
      <div className='footer_container'>
        <p>NEUROMIND</p>
        <div className="link">
          <ul className="hyper_link">
            {/* <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaLinkedin />Linked In</a></li> */}
            {/* <li><a href="http://neuromind.network@gmail.com" target="_blank" rel="noopener noreferrer"><MdOutlineAlternateEmail />Email</a></li> */}
            <li><a href="http://instagram.com/neuromind_ai/" target="_blank" rel="noopener noreferrer"><FaInstagram />Instagram</a></li>
            {/* <li><a href="http://" target="_blank" rel="noopener noreferrer"><FiMessageCircle />Message</a></li> */}
            <li><a href="http://twitter.com/neuromind_ai" target="_blank" rel="noopener noreferrer"><FaTwitter />Twitter</a></li>
            {/* <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaFacebook />Facebook</a></li> */}
          </ul>
        </div>

      </div>
    </>
  )
}
