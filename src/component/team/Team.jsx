import React from 'react'
import './team.css'
import Sidebar from '../Sidebar'
import profile from './profile.svg'
import alex from '../../assets/alex.jpeg'
import mayank from '../../assets/mayank.jpeg'
import rightonesvg from './rightonesvg.svg'
import companygreensvg from './companygreen.svg'
import companygreensvg2 from './companygreen2.svg'
import mayank1 from './mayanakcompanysvg/svg1.svg'
import mayank2 from './mayanakcompanysvg/svg2.svg'
import mayank3 from './mayanakcompanysvg/svg3.svg'
import mayank4 from './mayanakcompanysvg/svg4.svg'

import alex1 from './alexcompanysvg/svg1.svg'
import alex2 from './alexcompanysvg/svg2.svg'
import alex3 from './alexcompanysvg/svg3.svg'
import alex4 from './alexcompanysvg/svg4.svg'

import { FaLinkedin } from "react-icons/fa6";

export default function Team() {
    return (
        <div className='team_main_container'>
           {/* <Sidebar/> */}
           <div className="sub_team_main_container">
                <p className='divider'>Our Team</p>
            <div className="text_and_mission">
                <div className="svg_and_text">
                    <img src={rightonesvg} alt="" />
                   
                </div>
            </div>
            <div className="two_svg_and_text_company">
                <div className="mayank_svg_and_text_company_1">
                    <img src={companygreensvg} alt="" />
                    <div className="all_company_img">
                    <p>Graduated with distinction from IIT Kharagpur and  Paris School of Economics. Demonstrated innovation and strategic leadership throughout his entrepreneurial endeavors</p>
                    <div className="sub_all_company_img">

                        <img src={mayank1} alt="" />
                        <img src={mayank2} alt="" />
                        <img src={mayank3} alt="" />
                        <img src={mayank4} alt="" />
                    </div>
                    </div>

                </div>
                <div className="alex_svg_and_text_company_1">
                    <img src={companygreensvg2} alt="" />
                    <div className="all_company_img">
                    <p>Graduated from Moscow Institute of Physics and Technology with a focus on Computer Science and Blockchain Technologies. An accomplished smart contract engineer and a passionate software engineer.</p>
                    <div className="sub_all_company_img">

                        <img src={alex1} alt="" />
                        <img src={alex2} alt="" />
                        <img src={alex3} alt="" />
                        <img src={alex4} alt="" />
                    </div>
                    </div>

                </div>

            </div>
            <div className="profile_photo">
                <img src={profile} alt="" />
                <div className="img_photo">
                    <div className="img_1">
                        <img src={mayank} alt="" />
                        <div className="mayank_linkedin">

                        <a href='https://www.linkedin.com/in/mayank-mahawar-46032a4b/' target='_blank'><FaLinkedin/>Mayank</a>
                        </div>
                    </div>
                    <div className="img_1">
                        <img src={alex} alt="" />
                        <div className="alex_linkedin">

                        <a href='https://www.linkedin.com/in/alexsaplin/' target='_blank'><FaLinkedin/>Alex</a>
                        </div>
                    </div>
                    </div>
            </div>

                    </div>
        </div>
    )
}
