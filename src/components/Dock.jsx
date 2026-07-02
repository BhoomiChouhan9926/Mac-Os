import React from 'react'
import { FaComment, FaGithub } from 'react-icons/fa'
import { FaCalendarDays, FaEnvelope, FaFilePdf, FaLink, FaRegNoteSticky, FaSpotify, FaTerminal } from 'react-icons/fa6'
import './dock.scss'

const Dock = ({ windowsState, setwindowsState }) => {
  return (
    <footer className='dock'>
      <div
        onClick={() => { setwindowsState(state => ({ ...state, github: true })) }}
        className="icon github"><FaGithub size={35} color='white' /></div>
      <div
        onClick={() => { setwindowsState(state => ({ ...state, note: true })) }}
        className="icon note"><FaRegNoteSticky size={35} color='white' /></div>
      <div
        onClick={() => { setwindowsState(state => ({ ...state, resumw: true })) }}
        className="icon pdf"><FaFilePdf size={35} color='white' /></div>
      <div
      onClick={()=>{window.open(window.open("https://calendar.google.com", "_blank"))}} 
        className="icon calender"><FaCalendarDays size={35} color='white' /></div>
      <div
        onClick={() => { setwindowsState(state => ({ ...state, spotify: true })) }}

        className="icon spotify"><FaSpotify size={35} color='white' /></div>
      <div
        onClick={() => {
          window.open(
            "https://mail.google.com/mail/?view=cm&fs=1&to=bhoomichouhan040@gmail.com",
            "_blank"
          );
        }}
        className="icon mail"><FaEnvelope size={35} color='white' /></div>
      <div
        onClick={() => { window.open('https://www.linkedin.com/in/bhoomi-chouhan-66359327b?', "_blank") }}
        className="icon link"><FaLink size={35} color='white' /></div>
      <div
        onClick={() => { setwindowsState(state => ({ ...state, clii: true })) }} 
        className="icon cli"><FaTerminal size={35} color='white' />
        </div>
       <div 
       onClick={()=>{setwindowsState (state=>({...state,chatbox :true}))}}
       className="icon chat">
        <FaComment size={35} color='white' />
       </div>
    </footer>
  )
}

export default Dock
