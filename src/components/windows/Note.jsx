import React, { useState } from 'react'
import MacWindow from './MacWindow'
import Markdown from 'react-markdown'
import {useEffect} from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
//import notes from '../../../public/note.txt'
import './note.scss'


const Note = ({windowName,windowsState,setwindowsState}) => {
    const [markdown,setmarkdown] = useState(null)

    useEffect(()=>{
        fetch("/note.txt")
        .then(res=> res.text())
        .then(text => setmarkdown(text))
    },[])
  return (
   <MacWindow   windowName = {windowName} windowsState = {windowsState} setwindowsState={setwindowsState}   width='40vw' height='60vh'>
     <div className="note-window">
        {markdown? <SyntaxHighlighter language='typescript' style={ atelierDuneDark }>{markdown}</SyntaxHighlighter>: <p>Loading...</p>}
     </div>
   </MacWindow>

  )
}

export default Note
