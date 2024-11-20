import { useState } from 'react';

function App() {
  const [mycolor, setMycolor] = useState("#6262bb")
  const [textColor, setTextColor] = useState("white");

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: mycolor}}
    >
      <div className='w-full h-screen flex flex-wrap justify-center items-center font-bold text-[30px] '>
          <div style={{color: textColor}}>
            Click Given below Color Button for change backgroundColor
          </div>
      </div>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl '>

            <button
            onClick={ () => (
              setMycolor("red"),
              setTextColor("white")
            )}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: "red"}}
            >Red</button>

            <button
            onClick={ () => (
              setMycolor("green"),
              setTextColor("white")
            )}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: "green"}}
            >Green</button>

            <button
            onClick={ () => (
              setMycolor("blue"),
              setTextColor("white")
            )}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: "blue"}}
            >Blue</button>

            <button
            onClick={ () => (
              setMycolor("olive"),
              setTextColor("white")
            )}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: "olive"}}
            >Olive</button>

            <button
            onClick={ () => (
              setMycolor("gray"),
              setTextColor("white")
            )}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: "gray"}}
            >Gray</button>

            <button
            onClick={ () => (
              setMycolor("yellow"),
              setTextColor("black")
            )}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor: "yellow"}}
            >Yellow</button>

            <button
            onClick={ () => (
              setMycolor("pink"),
              setTextColor("white")
            )}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor: "pink"}}
            >Pink</button>

            <button
            onClick={ () => (
              setMycolor("purple"),
              setTextColor("white")
            )}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: "purple"}}
            >Purple</button>

            <button
            onClick={ () => (
              setMycolor("lavender"),
              setTextColor("black")
            )}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor: "lavender"}}
            >Lavender</button>

            <button
            onClick={ () => (
              setMycolor("white"),
              setTextColor("black")
            )}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor: "white"}}
            >White</button>

            <button
            onClick={ () => (
              setMycolor("black"),
              setTextColor("white")
            )}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: "black"}}
            >Black</button>
          </div>
      </div>

    </div>
  )
}

export default App
