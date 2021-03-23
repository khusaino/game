import { createContext } from "react";

const empty = () => {};
export const PlayContext = createContext({
  roundStatus     : null, 
  status          : null, 
  changedGrid     : null, 
  victory         : null, 
  setVictory      : empty(), 
  setChangedGrid  : empty(), 
  setCardKey      : empty(),
})