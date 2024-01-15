import React from 'react'
import './header.css'
import { SiBlockchaindotcom } from "react-icons/si";
export default function Header() {
    return (
        <div className='header_container'>
            <div className="gradient_color"></div>
            <div className="logo_and_name">

                <div className="logo"><SiBlockchaindotcom /></div>
                <div className="header_text">neuromind
                <p>	“ Modular orchestration protocol for AI networks ”</p>
                </div>
            </div>
        </div>
    )
}
