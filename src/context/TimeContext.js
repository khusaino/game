import { createContext } from "react";

const empty=()=>{}
export const TimeContext = createContext({
  setGameStatus : empty(), 
  setGlobalName : empty(), 
  time          : null,
}) 