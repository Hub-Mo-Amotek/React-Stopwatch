import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (

    
    <div className='flex flex-col justify-center items-center '>
    <h1 className="text-2xl font-semibold pb-2">Stopwatch</h1>
    <div>
      <span>{("0" + Math.floor((time/60000)%60))}:</span>
      <span>{("0" + Math.floor((time/1000)%60))}:</span>
      <span>{("0" + ((time/10)%100))}</span>
    </div>
    <div>
      {running ? (      
      <button className="bg-red-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={()=>{setRunning(false)}}>Stop</button>
      ) : (
      <button className="bg-green-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={()=>{setRunning(true)}}>Start</button>
      )}
      
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" onClick={()=>{setTime(0)}}>Reset</button>
    </div>

    </div>
  )
}

export default App
