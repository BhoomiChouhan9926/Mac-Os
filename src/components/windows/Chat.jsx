import React, { useState } from 'react'
import MacWindow from './MacWindow'
import './chat.scss'

const Chat = ({ windowName, windowsState, setwindowsState }) => {
    const [messages, setMessages] = useState([
        {
            sender: "bot",
            text: "Hi 👋 I'm Bhoomi's Assistant. Ask me about skills, projects, resume or contact,education,branch"
        }
    ])
    // this is the code for the input state 
    const [input, setInput] = useState("");

    // here if the function taht is training the bot 

    const getBotResponse = (message) => {
        message = message.toLowerCase()

        if (message.includes('skills')) {
            return "I know React, Node.js, Express.js , MongoDB,SQl"
        }
        if (message.includes("projects")) {
            return "My projects include Weather App, YouTube Shorts Clone and Portfolio Website."
        }

        if (message.includes("resume")) {
            return "Please click the Resume icon in the dock."
        }

        if (message.includes("contact")) {
            return "You can contact me through Gmail or LinkedIn."
        }

         if (message.includes("education")) {
            return "I have completed me B.Tech from School Of Information Technology RGPV University Bhopal "
        }
        if (message.includes("branch")) {
            return "My branch is CSE(AIML)"
        }
         if (message.includes("music")) {
            return "Pls check it by clicking spotify"
        }
        if (message.includes("name")) {
            return"My name is bhoomi chouhan"
        }
        return "Sorry, I don't understand that question."

    }
    // this is the function to get the input from the user 

    const sendMessage = () => {

        if (!input.trim()) return

        const userMessage = {
            sender: "user",
            text: input
        }

        const botMessage = {
            sender: "bot",
            text: getBotResponse(input)
        }

        setMessages(prev => [
            ...prev,
            userMessage,
            botMessage
        ])

        setInput("")
    }
    return (
        <MacWindow windowName={windowName} windowsState={windowsState} setwindowsState={setwindowsState} width='40vw' height='60vh'>
            <div className="chat-container">
                <div className="messages">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`message ${msg.sender === "user" ? "user-message" : "bot-message"
                                }`}
                        >
                            {msg.text}
                        </div>
                    ))}
                </div>

                <div className="input-area">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && input.trim()) {
                                sendMessage();
                            }
                        }}
                        placeholder="Type a message..."
                    />

                    <button onClick={sendMessage}>
                        Send
                    </button>
                </div>

            </div>
        </MacWindow>
    )
}

export default Chat
