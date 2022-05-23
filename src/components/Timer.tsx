import React, { useEffect, useRef, useState } from "react";
import { Colors } from "../modules/Colors";
import { Player } from "../modules/Player";

interface TimerProps {
    curretnPlayer: Player | null;
    restart: () => void;
}

const Timer: React.FunctionComponent<TimerProps> = ({curretnPlayer, restart}) => {
    const [blackTime,setBlackTime] = useState(300)
    const [whiteTime,setWhiteTime] = useState(300)
    const timer = useRef<null | ReturnType<typeof setInterval>> (null)
   
   useEffect(() => {
    startTimer()
   },[curretnPlayer])
   
   
   
   function handleRestart() {
       setBlackTime(300);
       setWhiteTime(300);
       restart()
   }
    function startTimer() {
        if(timer.current) {
            clearInterval(timer.current)
        }
        const callback = curretnPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer;
        timer.current = setInterval(callback, 1000)
    }
    function decrementBlackTimer () {
        setBlackTime( prev => prev - 1)
    }
    function decrementWhiteTimer () {
        setWhiteTime( prev => prev - 1)
    }
    return (
        <div>
            <div>
            <button onClick={handleRestart}>
                Restart game
            </button>
            </div>
            <h2>Черные - {blackTime} </h2>
            <h2>Белые - {whiteTime} </h2>

        </div>
    )
}

export default Timer;