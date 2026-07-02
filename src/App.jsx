import React, { useState } from 'react'

import "./app.scss"
import { FaInstagram } from 'react-icons/fa6'
import Dock from './components/Dock'
import Nav from './components/Nav'
import MacWindow from './components/windows/MacWindow'
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import Chat from './components/windows/Chat'

const App = () => {

  const [windowsState, setwindowsState] = useState({
    github:false,
    note :false,
    resumw:false,
    spotify:false,
    clii:false,
    chatbox :false
    
  })
  return (
   <main>
    <Nav/>
    <Dock windowsState = {windowsState} setwindowsState={setwindowsState}/>
    {windowsState.github &&   <Github windowName = "github" windowsState = {windowsState} setwindowsState={setwindowsState}/>}
   {windowsState.note && <Note windowName = "note" windowsState = {windowsState} setwindowsState={setwindowsState}/>}
   {windowsState.resumw && <Resume windowName = "resumw" windowsState = {windowsState} setwindowsState={setwindowsState}/>}
  {windowsState.spotify &&  <Spotify windowName = "spotify" windowsState = {windowsState} setwindowsState={setwindowsState}/>}
   {windowsState.clii && <Cli  windowName = "clii" windowsState = {windowsState} setwindowsState={setwindowsState}/> }
    {windowsState.chatbox && <Chat windowName = "chatbox" windowsState = {windowsState} setwindowsState = {setwindowsState}/>}
   </main>
  )
}

export default App
