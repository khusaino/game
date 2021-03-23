import { useContext, useState } from "react"
import { GameContext } from "../context/GameStatusContext"
import { TimeContext } from "../context/TimeContext"
import { globalName, storageName } from "../data/keyWords"
import './style/victory.css'

export const Victory = () =>{
  const [name, setName]     = useState('player')
  const {time}              = useContext(TimeContext)
  const {changeGameStatus}  = useContext(GameContext)
  const {stopGame}          = globalName
  
  const saveResult = ()=>{
    let storage = JSON.parse(localStorage.getItem(storageName))

    if(storage){
      storage.push({name: name, time: time })
      localStorage.setItem(storageName, JSON.stringify(storage))
    }else{
      localStorage.setItem(storageName, JSON.stringify([{name: name, time: time }]))
    }
  }
  
  return(
    <div className="victory">
     	<h3 className="victory__title">you win!!!</h3>
     	<div className="victory__text">Enter your name</div>
     	<input className="victory__input" type="text" onChange={(event)=>{setName(event.target.value)}} value={name}/>
     	<button className="victory__btn" onClick={()=>{saveResult(); changeGameStatus(stopGame)}}>Enter</button>
    </div>
  )
}