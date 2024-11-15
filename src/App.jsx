import { useEffect, useRef, useState, useTransition } from 'react'
import './App.css'
import PAGE1 from './components/page1'
import PAGE2 from './components/page2';
import PAGE3 from './components/page3';
import PAGE4 from './components/page4';
import PAGE5 from './components/page5';


function App() {
  const screen = useRef(null)
  const cursor = useRef(null)
  const [bgcolor, setColor] = useState("transparent")

  const cursorMove = (dets) => {
    if (cursor.current) {
      cursor.current.style.transform = `translate3d(${dets.clientX -
        cursor.current.clientWidth / 2}px, ${dets.clientY -
        cursor.current.clientHeight / 2}px, 0)`;    }
  }

  const bgChanger = () =>{
    setColor("white")
  }

  const bgReverseChanger = () =>{
    setColor("transparent")
  }

  const [scale, setScale] = useState(1); // Initial scale is 1


  return (
    <>
      <div ref={screen} onMouseMove={cursorMove} id="main w-full h-full bg-black">
        <div style={{"--bgcolor": bgcolor, "--scale": scale,transform: `scale(${scale})`}} ref={cursor} className="custom z-[999999] w-5 h-5 bg-transparent rounded-full border border-solid border-white/40 fixed pointer-events-none"></div>
        <PAGE1 />
        <PAGE2 bgChanger={bgChanger} bgReverseChanger={bgReverseChanger} />
        <PAGE3 bgChanger={bgChanger} bgReverseChanger={bgReverseChanger} />    
        <PAGE4 />   
        <PAGE5 bgChanger={bgChanger} bgReverseChanger={bgReverseChanger} />
      </div>
    </>
  )
}

export default App
