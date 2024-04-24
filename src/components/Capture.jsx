import { useEffect, useRef, useState } from 'react'
import Webcam from "react-webcam"


const Capture = () => {

    //-----screenshot--------------//
    const webcamRef = useRef(null)
    const [img, setImg] = useState()

    const capture = () => {
        setImg(webcamRef.current.getScreenshot())
    }

    return (
        <>

        <div className='box'>
          <Webcam ref={webcamRef}
            audio={false}
            height={400}
            screenshotFormat="image/jpeg"
            imageSmoothing={true}
            width={500}
          />

          <div className='img'>
            {img && <img src={img} alt="img" />}
          </div>
        </div>

        <div>
          <button onClick={capture} className='btn'>screenShot </button>
          {img && <button onClick={() => setImg()} className='btn'>delete</button>}
        </div>

      </>
    )
}

export default Capture