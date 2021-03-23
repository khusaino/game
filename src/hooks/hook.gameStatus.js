import { useState } from "react"

export const useGame =()=>{
  const [gameStatus, setGameStatus] = useState('stop')

  const changeGameStatus = (status) =>{
    setGameStatus(status)
  }
  return {gameStatus, changeGameStatus}
}