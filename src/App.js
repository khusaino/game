import React  from 'react'
import {Header} from './components/Header'
import { Main } from './components/Main';
import { GameContext } from './context/GameStatusContext';
import { PlayContext } from './context/PlayContext';
import { TimeContext } from './context/TimeContext';
import { useGame } from './hooks/hook.gameStatus';
import { usePlay } from './hooks/hook.play';
import { useTimer } from './hooks/hook.timer';

function App() {
  const game = useGame()
  const play = usePlay()
  const time = useTimer()
  
  return (
    <GameContext.Provider value={game}>
      <PlayContext.Provider value={play}>
        <TimeContext.Provider value={time}>
          <div className="wrapper">
            <Header/>
            <div className="main">
              <div className="main__container container">
                <Main/>
              </div>
            </div>
          </div>
        </TimeContext.Provider>
      </PlayContext.Provider>
    </GameContext.Provider>
  );
}

export default App;
