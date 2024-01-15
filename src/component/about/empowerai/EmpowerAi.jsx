import React from 'react'
import './empowerai.css'
import backgroundgreensvg from '../../../assets/backgroundgreen.svg'
import backgroundgraysvg from '../../../assets/backgroundgray.svg'
import Sidebar from '../../Sidebar'
import Depin from '../depin/Depin'


export default function EmpowerAi() {
  return (
    <>
  < div className='empower_main_container'>
     {/* <Sidebar/> */}
    <div className='empowerai_container'>
        <div className="empowerai_text">Neuromind: empowering AI communities with modular staking infrastructure</div>
        <div className="background_green_and_gray_svg">
            <div className="green_svg">

            <img src={backgroundgreensvg} alt="" />
            </div>
            <div className="background_gray_svg">
                {/* <img src={backgroundgraysvg} alt="" /> */}
                <ul className="empowerai_list_container">
                    <li className="list_content"><p>Simplifies staking and node orchestration for burgeoning AI and DePIN networks</p></li>
                    <li className="list_content"> <p>Serves as the preferred platform to provide transparency into networks, KPIs, and APRs</p></li>
                    <li className="list_content"><p>Fosters safety and decentralization for smooth collaboration in AI networks via a modular architecture</p></li>
                    <li className="list_content"><p>Empowers home node runners and a network of infrastructure providers as a DePIN aggregation layer</p></li>
                </ul>
            </div>
        </div>
      
    </div>
  </div>
  <Depin/>
    </>
  )
}
