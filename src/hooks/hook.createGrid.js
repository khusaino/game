import { useState } from "react";

export const useGrid = () =>{
  const [grid, setGrid] = useState([])

  const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
  }

  const generateGrid = (data) => {
    let arr = data.concat(data)
    let res = []
    while(arr.length !== 0){
      let num   = getRandomArbitrary(0, arr.length)
      let elem  = arr.splice(num,1)
      res       = res.concat(elem)
    }
    setGrid(res)
  }

  return {grid, generateGrid}
}
