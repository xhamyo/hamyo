
"use client"

import Image from "next/image";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function home() {

  const [ noButtonClicks, setNoButtonClicks ] = useState(0);
  const [ showYesButton, setShowYesButton ] = useState(true);
  const [ showNoButton, setShowNoButton ] = useState(true);
  const messages = [
    "Say Yes!",
    "What",
    "Stop", 
    "Please Pooks",
    "Weyhh",
    "Literally You.",
    "No choice now!"
  ]
  const images = [
    "/images/valentines/valentines1.jpg",
    "/images/valentines/valentines2.jpg",
    "/images/valentines/valentines3.jpg",
    "/images/valentines/valentines4.jpg",
    "/images/valentines/valentines5.jpg",
    "/images/valentines/valentines6.jpg",
    "/images/valentines/valentines7.jpg"
  ]

  const handleYesClicks = () => {
    setShowYesButton(false);
    setShowNoButton(false);
  }

  const handleNoClicks = () => {
    setNoButtonClicks(prevClicks => {
      if (prevClicks == 5) {
        setShowNoButton(false);
      }
      return prevClicks + 1
    });
  }

  return (
    <main>
      <div className="w-full h-[70vh] flex flex-col space-y-2 items-center justify-center">

        <div className="h-[12rem]">
          {showYesButton ? (
            <div className="flex flex-col h-full items-center justify-center">
              <Image alt="valentinesNo" src={images[noButtonClicks]} width={150} height={150}/>
              <h1 className="text-xl font-bold tracking-tight">
                {messages[noButtonClicks]}
              </h1>
            </div>
          ):(
            <div className="flex flex-col h-full items-center justify-center">
              <Image alt="valentinesYes" src="/images/valentines/valentines8.jpg" width={150} height={150}/>
              <h1 className="text-xl font-bold tracking-tight">
                *wink*
              </h1>
            </div>
          )}
        </div>

        <div className="rounded-lg bg-[#BC204B] w-[90vw] md:min-w-[48rem] md:w-[50vw] shadow-lg text-white">
          <div className="p-4 md:p-8 flex flex-col justify-center items-center space-y-2 md:space-y-3">
            
            <h1 className="text-2xl md:text-3xl font-black tracking-tight">
              Will you be my Valentine?
            </h1>

            <div className="animate-sizeCycle">
              <FaHeart className="text-5xl md:text-6xl animate-sizeCycle"/>
            </div>

            <h1 className="text-xl md:text-2xl font-light" >
              14 February <span className="font-bold">You + Me?</span>
            </h1>
            
            <div className="flex flex-row space-x-5 font-bold tracking-light text-lg md:text-xl">
              { showYesButton && (
                <button onClick={handleYesClicks} className="p-2 md:p-3 w-[8rem] md:w-[10.5rem] rounded-xl border-2 border-green-700 bg-green-600 hover:scale-[1.1] transition-all duration-200 ease-in-out">
                  Yes
                </button>
              )}
              { showNoButton && (
                <button onClick={handleNoClicks} className="p-2 md:p-3 w-[8rem] md:w-[10.5rem] rounded-xl border-2 border-red-800 bg-red-700 hover:scale-[1.1] transition-all duration-200 ease-in-out">
                  No
                </button>
              )}
              { !showYesButton && (
                <div className="p-2 md:p-3 text-center border-2 border-transparent">
                  {`yay see you on friday pooks <3`}
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
