import React from 'react'
import './nav.scss'
import { FaApple, FaWifi } from 'react-icons/fa'
import DateTime from './DateTime'

const Nav = () => {
  return (
   <nav>
    <div className="left">
        <div className="apple-icon"><FaApple/></div>
        <div className="nav-item">
            <p>Bhoomi Chouhan</p>
        </div>

        <div className="nav-item">
            <p>File</p>
        </div>

        <div className="nav-item">
            <p>Window</p>
        </div>

        <div className="nav-item">
            <p>Terminal</p>
        </div>

        
    </div>
    <div className="right">
        <div className="nav-icon"> <FaWifi/> </div>
         <div className="nav-item">
           <DateTime/>
        </div>
    </div>
   </nav>
  )
}

export default Nav

