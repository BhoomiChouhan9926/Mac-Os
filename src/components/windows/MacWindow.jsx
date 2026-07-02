import React from 'react'
import { Rnd } from 'react-rnd'
import './window.scss'

const MacWindow = ({ windowName,windowsState,setwindowsState,children,width="40vh",height="60vh"}) => {
    return (
        <Rnd
        default={{
            width:width,
            height:height,
            x:300,
            y:200
        }}>
            <div className="window">
                <div className="nav">
                    <div className="dots">
                        <div 
                        onClick={()=>{setwindowsState(state =>({...state, [windowName] :false}))} }
                        className="dot red"></div>
                        <div className="dot yellow"></div>
                       <div className="dot green"></div>
                    </div>
                    <div className="title"><p>bhoomichouhan - zsh</p></div>

                </div>
                <div className="main-content">
                    {children}
                </div>
            </div>
        </Rnd>
    )
}

export default MacWindow
