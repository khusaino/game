import { useState, useEffect, useCallback } from "react"

export const useTimer = () =>{
  const timerValue                  = '00 : 00'
  const [time, setTime]             = useState(timerValue)
  const [globalName, setGlobalName] = useState({})
  const [gameStatus, setGameStatus] = useState(null)

  const validTime = (number) =>{
    if(number<10){
      return "0"+ number 
    }

    return String(number)
  }

  const activateTimer = useCallback(() =>{
    if(gameStatus === globalName.startGame || gameStatus === globalName.continueGame){
      setTimeout(()=>{
        setTime(prev=>{
          let [min, sec] = prev.split(':')
          let minute = parseInt(min)
          let second = parseInt(sec)
          second++

          if(second === 60){
            second = 0
            minute++;
          }

          if(minute === 60){
            minute = 0
          }
          
          return validTime(minute) + " : " + validTime(second)
        })
      }, 1000)
    }else if(gameStatus === globalName.pauseGame){
      return false
    }
    else if(gameStatus === globalName.stopGame){
      setTime(timerValue)
    }
  }, [gameStatus, time])
  
  useEffect(()=>{
    activateTimer()
  }, [activateTimer])

  return{setGameStatus, setGlobalName, time}
}