import React from 'react'
import MacWindow from './MacWindow'
import './resume.scss'

const Resume = ({windowName,windowsState,setwindowsState}) => {
  return (
    <MacWindow   windowName = {windowName} windowsState = {windowsState} setwindowsState={setwindowsState}   width='40vw' height='60vh'>
        <div className="resume-window">
            <embed src="/resume.pdf" frameBorder="0"></embed>
        </div>
    </MacWindow>
  )
}

export default Resume
