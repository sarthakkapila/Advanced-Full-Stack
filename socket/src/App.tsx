import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:8080');
    newSocket.onopen = () => {
      console.log('Connection established');
      newSocket.send('Hello Server!');
    }
    newSocket.onmessage = (message) => {
      console.log('Message received:', message.data);
    }
    setSocket(newSocket);
    return () => newSocket.close();
  }, [])

  if (!socket){
    return (
    <div>
    Connecting to server
    </div>
    )
  }

  return (
    <>
      <h1>hi ««« BROO</h1>
      <input></input>
      <button onClick={ () => {
        socket?.send("message sent")
      }}>Send</button>
    </>
  )
}

export default App