import { useContext, useEffect } from "react"
import { GameContext } from "../context/GameStatusContext"
import { PlayContext } from "../context/PlayContext"
import { data } from "../data/imgData"
import { globalName } from "../data/keyWords"
import { useGrid } from "../hooks/hook.createGrid"
import { Description } from "./Description"
import { Grid } from "./Grid"
import { Pause } from "./Pause"
import { Victory } from "./Victory"

export const Main = () =>{
  const {grid, generateGrid}                      = useGrid()
  const {gameStatus, changeGameStatus}            = useContext(GameContext)
  const { victory, setVictory, setChangedGrid}    = useContext(PlayContext)
  const {startGame, stopGame, pauseGame, endGame} = globalName

  useEffect(()=>{
    setChangedGrid(grid)
  }, [grid])

  useEffect(()=>{
    if(gameStatus === startGame){
      let arr = data.map(elem=>{
        elem[2] = false
        return elem;
      })
      generateGrid(arr)
    }
    else if(gameStatus === stopGame){
      setVictory(false)
    }
  },[gameStatus])

  useEffect(()=>{
    if(victory){
      changeGameStatus(endGame)
    }
  },[victory])


 
  
  if(gameStatus === stopGame){
    return <Description/>
  }
  else if(gameStatus === pauseGame){
    return <Pause/>
  }
  else if(victory){
    return <Victory/>
  } 

  return <Grid grid={grid}/>
}