import { useContext, useEffect, useState } from "react"
import { PlayContext } from "../context/PlayContext"
import './style/grid.css'

export const Grid = (props) => {
  const [firstCard, setFirstCard]         = useState(null)
  const [secondCard, setSecondCard]       = useState(null)
  const {roundStatus, status, setCardKey} = useContext(PlayContext)
  
  const animateCards = (event)=>{
    if(!firstCard){
      setFirstCard(event.target)
    }
    else if(!secondCard){
      setSecondCard(event.target)
    }
  }

  useEffect(()=>{
    switch (roundStatus) {
      case status.open1:
        firstCard.classList.add('open')
        firstCard.onClick = ()=>{}
        break;

      case status.open2:
        if(secondCard){
          secondCard.classList.add('open')
        }
        break;

      case status.fail:
        if(firstCard || secondCard){
          firstCard.classList.add('fail')
          if(secondCard){
            secondCard.classList.add('fail')
          }
          setTimeout(()=>{
            firstCard.classList.remove('fail', 'open')
            if(secondCard){
              secondCard.classList.remove('fail', 'open')
            }
          }, 1000)
          setFirstCard(null)
          setSecondCard(null)
        }
        break;

      case status.success:
        if(firstCard || secondCard){
        firstCard.classList.add('disabled')
        secondCard.classList.add('disabled')
        setFirstCard(null)
        setSecondCard(null)
        }
        break;

      default:
        break;
    }
  }, [roundStatus])
  
  return(
    <div className="grid">

      {props.grid.map((elem, i ) => {
        let atribute = {className: 'card', key: i}
        if(elem[2]){
          atribute = {
            className : 'card',
            key       : i,
          }
        }else{
          atribute = {
            className : 'card',
            onClick   : (event)=>{
              if(!event.target.classList.contains('open')){
                setCardKey(elem[1]); 
                animateCards(event)
              };
            },
            key       : i,
          }
        }

        return (
          <div {...atribute}>
            <div className="card__front card__item" > 
              <img className="cart__front-img" src={elem[0]} alt="cart"/>
            </div>
            <div className="card__rear card__item">
              <img className="cart__rear-img" src="img/rear.jpg" alt="rear"/>
            </div>
          </div>
        )
        
      })}
      
    </div>
  )
}