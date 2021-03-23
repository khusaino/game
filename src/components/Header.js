import { useContext } from "react"
import { GameContext } from "../context/GameStatusContext"
import { globalName } from "../data/keyWords"
import { Timer } from "./Timer"
import './style/header.css'

export const Header = () => {
  const {stopGame, pauseGame, continueGame, startGame} = globalName
  const {gameStatus, changeGameStatus}                 = useContext(GameContext)

  let rightBtn = null,
      leftBtn  = null;
  
  if(gameStatus === stopGame){
    rightBtn   = <button className="control__btn" onClick={()=>{changeGameStatus(startGame)}}>Start</button>
    leftBtn    = <div></div>
  }else{
    rightBtn   = <button className="control__btn control__btn-stop" onClick={()=>{changeGameStatus(stopGame)}}>Stop</button>
  }

  if(gameStatus === startGame || gameStatus === continueGame){
    leftBtn    = <button className="control__btn control__btn-pause" onClick={()=>{changeGameStatus(pauseGame)}}>Pause</button>
  }else if(gameStatus === pauseGame){
    leftBtn    = <button className="control__btn control__btn-pause" onClick={()=>{changeGameStatus(continueGame)}}>continue</button>
  }


  return(
    <header className="header">
      <div className="header__container container">
        <Timer/>
        <div className="control">
          {leftBtn}
          {rightBtn}
        </div>
      </div>
    </header>
  )
}