import { useContext, useEffect} from "react"
import { GameContext } from "../context/GameStatusContext"
import { TimeContext } from "../context/TimeContext"
import { globalName } from "../data/keyWords"
import './style/timer.css'

export const Timer = () =>{
  const {gameStatus}     = useContext(GameContext)
  const {setGameStatus, 
    setGlobalName, 
    time}                = useContext(TimeContext)
  

  useEffect(()=>{
    setGameStatus(gameStatus)
    setGlobalName(globalName)
  }, [gameStatus])

  return(
    <div className="timer">{time}</div>
  )
}