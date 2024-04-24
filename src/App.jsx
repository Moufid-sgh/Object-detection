import { useState } from 'react'
import './App.css'
import Capture from './components/Capture'
import ObjectDetect from './components/ObjectDetect'

function App() {

  const [captureOn, setCaptureOn] = useState(true)

  return (
    <div className='main'>
    <div className='menu'>
      <button onClick={() =>setCaptureOn(true)}>Capture</button>
      <button onClick={() =>setCaptureOn(false)}>Obj detect</button>
    </div>

     {captureOn ? <Capture /> : <ObjectDetect />}
    </div>
  )
}

export default App
