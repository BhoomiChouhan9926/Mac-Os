import React from 'react'
import githubData from '../../assets/github.json'
import MacWindow from './MacWindow'
import './github.scss'



const GitCard = ({data= {id:1,img:"",title:" ",desc:"",tags:[],repolink:"",demoLink:""}})=>{
  return <div className="card">
    <img src={data.img} alt="" />
    <h1>{data.title}</h1>
    <p className='desc'>{data.desc}</p>
    <div className="tags">
      {
        data.tags.map(tag => <p className='tag'>{tag}</p>)
      }
    </div>
    <div className="urls">
      <a href={data.repolink}>Repository</a>
      {data.demoLink && <a href={data.demoLink}>Demo link</a>
}
    </div>
  </div>

}

const Github = ({windowName,windowsState,setwindowsState}) => {
  return (
    <MacWindow  windowName = {windowName} windowsState = {windowsState} setwindowsState={setwindowsState}  width='40vw' height='60vh'>
      <div className="cards">
        {githubData.map(project =>{
            return  <GitCard key={project.id}  data={project}/>
        })}
        </div>  

    </MacWindow>
  )
}

export default Github
