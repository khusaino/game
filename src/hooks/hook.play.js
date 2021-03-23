import { useEffect, useState } from "react"

export const usePlay = () =>{
  const status = {
    open1   : "open1",
    open2   : 'open2',
    wait    : 'wait',
    success : 'success',
    fail    : 'fail',
  }

  const [roundStatus, setRoundStatus]   = useState(status.fail) //сосотояние статуса раунда
  const [firstCard, setFirsCard]        = useState(null) 
  const [secondCard, setSecondCard]     = useState(null)
  const [time, setTime]                 = useState(null)  // зарезервировано для таймера(5сек)
  const [victory, setVictory]           = useState(false)
  const [changedGrid, setChangedGrid]   =  useState([])

  const setCardKey = (key) => {
    switch (roundStatus) {
      case status.fail:
        setFirsCard(key)
        setRoundStatus(status.open1)
        break;
      case status.success:
        setFirsCard(key)
        setRoundStatus(status.open1)
        break;
      case status.wait:
        setSecondCard(key)
        setRoundStatus(status.open2)
        break;
      default:
        break;
    }
  }

  // меняет флажок на угаданных картах на true в массиве с картами
  const changeGrid = (key) =>{
    setChangedGrid((prev=>{
      let res = prev.map(elem=>{
        if(elem[1]=== key){
          elem[2] = true
          return elem
        }
        return elem
      })
      return res
    }))
  }

  // проверка карт на совподение
  const checkCarts = () =>{
    if(firstCard === secondCard){
      changeGrid(secondCard)
      setFirsCard(null)
      setSecondCard(null)
      setRoundStatus(status.success)
    }
    else{
      setRoundStatus(status.fail)
      setFirsCard(null)
      setSecondCard(null)
    }
  }

  // проверка массива с картами 
  const checkAllCards = ()=>{
    let res = false
    let iteraite = false

    for(let elem of changedGrid){
      iteraite = true
      if(elem.indexOf(false) !== -1){
        res = true
      }
    }

    if(!res && iteraite){
      setTimeout(()=>{
        setVictory(true)
      }, 1000)
    }
  }


  useEffect(()=>{
    switch (roundStatus) {
      case status.open1:
        setRoundStatus(status.wait)
        setTime(setTimeout(()=>{
          setFirsCard(null)
          setSecondCard(null)
          setRoundStatus(status.fail)
        }, 5000))
        break;
        
      case status.open2:
        clearTimeout(time)
        checkCarts()
        break;
      
      case status.success:
        checkAllCards();
        break
    
      default:
        break;
    }
    
  }, [roundStatus])
  

  return{roundStatus, status, changedGrid, victory, setVictory, setChangedGrid, setCardKey}
} 

