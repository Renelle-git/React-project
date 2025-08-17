import { useState, useEffect, useRef } from "react"

function Stopwatch(){

    const [isRunning, setIsRunning] =  useState(false); // set isRunning value into false
    const [elapsedTime, setElapsedTime] = useState(0); // set elapsed time value to zero
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);


    useEffect(()=>{
        if(isRunning){
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            }, 10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }
    },[isRunning]);


    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop(){
        setIsRunning(false);
    }

    function reset(){
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime(){
        // to calculate hour
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60)); //1000 miliseconds * 60 seconds * 60 minutes

        // to calculate  minutes
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60); 
        // to calculate seconds
        let seconds = Math.floor(elapsedTime / 1000  % 60);

        // to calculate miliseconds 
        let miliseconds = Math.floor(elapsedTime % 1000 / 10); 

        hours = String(hours).padStart(2,"0");
        minutes = String(minutes).padStart(2,"0");
        seconds = String(seconds).padStart(2,"0");
        miliseconds = String(miliseconds).padStart(2,"0");



        return (`${hours}:${minutes}:${seconds}:${miliseconds}`);
    }

    return(
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button onClick={() => {start()}} className="start-button">Start</button>
                <button onClick={() => {stop()}}className="stop-button">Stop</button>
                <button onClick={()=> {reset()}} className="reset-button">Reset</button>
            </div>
        </div>
    );
}


export default Stopwatch