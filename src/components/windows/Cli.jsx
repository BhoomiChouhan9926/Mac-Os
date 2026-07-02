import React from 'react'
import MacWindow from './MacWindow'

import TerminalModule from "react-console-emulator";

const Terminal = TerminalModule.default;
import './Cli.scss'
const Cli = ({windowName , windowsState,setwindowsState}) => {


  const commands = {
    echo: {
      description: 'Echo a passed string.',
      usage: 'echo <string>',
      fn: (...args) => args.join(' ')
    },
    // help: {
    //   description: 'List available commands',
    //   usage: 'help',
    //   fn: () => Object.keys(commands).map(cmd => `${cmd} — ${commands[cmd].description}`).join('\n')
    // },
    about: {
      description: 'Short about message',
      usage: 'about',
      fn: () => 'Hi — I\'m a demo portfolio. This terminal shows example commands.'
    },
    github: {
      description: 'Show GitHub profile (dummy)',
      usage: 'github',
      fn: () => 'https://github.com/your-username (dummy)'
    },
    resume: {
      description: 'Show resume link (dummy)',
      usage: 'resume',
      fn: () => 'Resume: https://example.com/resume.pdf (dummy)'
    },
    note: {
      description: 'Show a sample note',
      usage: 'note',
      fn: () => 'Sample note:\n- Remember to update portfolio.\n- Add real links.'
    },
    spotify: {
      description: 'Show currently playing (demo)',
      usage: 'spotify',
      fn: () => 'Nothing playing — this is a demo.'
    },
    skills: {
  description: 'Show technical skills',
  usage: 'skills',
  fn: () => `
Frontend:
- React.js
- JavaScript (ES6+)
- HTML5
- CSS3 / SCSS
- Tailwind CSS

Backend:
- Node.js
- Express.js

Database:
- MongoDB

Tools:
- Git & GitHub
- VS Code
- Postman
`
},

experience: {
  description: 'Show work experience',
  usage: 'experience',
  fn: () => `
MERN Stack Developer

- Built responsive web applications using React.
- Developed REST APIs with Node.js and Express.
- Worked with MongoDB databases.
- Created portfolio and personal projects.
`
},
projects: {
  description: 'Show featured projects',
  usage: 'projects',
  fn: () => `
Featured Projects:

1. Weather App
   - Real-time weather information
   - OpenWeather API
   - React.js

2. YouTube Shorts Clone
   - Vertical video feed
   - React.js
   - Responsive UI

Type:
project weather
project shorts
for more details (coming soon).
`
},
contact: {
  description: 'Show contact information',
  usage: 'contact',
  fn: () => `
Contact Information

Email: bhoomi@example.com
GitHub: github.com/yourusername
LinkedIn: linkedin.com/in/yourusername
Location: India
`
}

    // clear: {
    //   description: 'Clear the terminal (demo)',
    //   usage: 'clear',
    //   fn: () => 'Use the terminal UI to clear the screen (demo).' 
    // }
  };

  const welcome = [
    'Welcome to my portfolio CLI!',
    'Type "help" to list available commands.',
    'Available commands:',
    Object.keys(commands).join(', ')
  ];

  return (
     <MacWindow windowName={windowName}  windowsState={windowsState} setwindowsState={setwindowsState} width='40vw' height='60vh'>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcome}
          promptLabel={"bhoomichouhan:~$"}
          promptLabelStyle ={{color:'green'}}
        />
      </div>
    </MacWindow>
  );
};

export default Cli
