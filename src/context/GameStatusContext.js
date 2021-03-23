import { createContext } from "react"

const empty = () => {}
export const GameContext = createContext({
    gameStatus       : null, 
    changeGameStatus : empty(),
})