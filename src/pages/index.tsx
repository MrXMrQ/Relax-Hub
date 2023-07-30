import { BsSkipBackwardFill, BsFillPlayFill, BsSkipForwardFill, BsFillVolumeDownFill, BsFillVolumeMuteFill, BsFilm, BsListCheck, BsPlayBtnFill, BsGearFill, BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { Inter } from 'next/font/google'
import Clock from '@/components/Clock';
import ButtonWithHover from '@/components/ButtonWithHover';
const inter = Inter({ subsets: ['latin'] })
import React, { useState } from 'react'

export default function Home() {
  const [showScene, setShowScene] = useState(false)
  const [showToDoList, setShowToDoList] = useState(false)
  const [showYouTube, setShowYouTube] = useState(false)

  const handleScene = () => {
    setShowScene(!showScene)
    setShowToDoList(false)
    setShowYouTube(false)
  }

  const handleToDoList = () => {
    setShowToDoList(!showToDoList)
    setShowScene(false)
    setShowYouTube(false)
  }

  const handleYouTube = () => {
    setShowYouTube(!showYouTube)
    setShowScene(false)
    setShowToDoList(false)
  }

  return (
    <div className='w-screen h-screen bg-green-500'>
      <div className='flex items-center flex-col w-full h-full py-5'>
        <div className='justify-center w-full h-full'>
          <div className='grid grid-cols-3 gap-4 justify-center'>
            <div className=' p-4 col-start-1 row-start-3 bg-gray-500 bg-opacity-0'>test</div>
            <div className='bg-green-300 p-7 col-start-2 row-start-2'>test</div>
            <div className='bg-red-300 p-3 col-start-3 row-start-1'>test</div>
          </div>
        </div>
        <div className='flex w-11/12 lg:h-[3.4rem] md:h-[3.4rem] sm:h-[3.4rem] rounded-lg bg-gradient-to-r from-gray-800 to-zinc-900 shadow-2xl shadow-stone-800 outline outline-slate-200 outline-1 text-center items-center px-4' style={{ fontSize: '1.75rem' }}>
          <div className='flex flex-auto'>
            <Clock></Clock>
          </div>
          <div className='flex flex-auto justify-center items-center space-x-4' >
            <ButtonWithHover icon={BsSkipBackwardFill} text='skip' />
            <ButtonWithHover icon={BsFillPlayFill} text='play' />
            <ButtonWithHover icon={BsSkipForwardFill} text='skip' />
            <ButtonWithHover icon={BsFillVolumeDownFill} text='volume' />
            <ButtonWithHover icon={BsFillVolumeMuteFill} text='mute' />
            <div className='relative'>
              {
                showScene &&
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 rounded-lg shadow-md text-base font-bold w-auto h-auto bg-zinc-700 px-2 py-2 space-y-10">
                  <div className='flex w-full h-full items-center'>
                    <BsChevronCompactLeft size={50}/>
                    <div className='bg-blue-500 w-[30rem] h-[20rem] rounded-md shadow-2xl'>

                    </div>

                    <BsChevronCompactRight size={50}/>
                  </div>
                </div>
              }
              <ButtonWithHover icon={BsFilm} text='szene' isOpen={showScene} onClick={handleScene} />
            </div>
            <div className='relative'>
              {
                showToDoList &&
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 rounded-lg shadow-md text-base font-bold w-auto h-auto bg-zinc-700 px-2 py-2 space-y-10">
                  <div className='flex w-full h-full items-center'>
                    <div className='bg-blue-500 w-[30rem] h-[20rem] rounded-md shadow-2xl'>

                    </div>
                  </div>
                </div>
              }
              <ButtonWithHover icon={BsListCheck} text='to_do_list' isOpen={showToDoList} onClick={handleToDoList} />
            </div>
            <div className='relative'>
              {
                showYouTube &&
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 rounded-lg shadow-md text-base font-bold w-auto h-auto bg-zinc-700 px-2 py-2 space-y-10">
                  <div className='bg-blue-500 w-[30rem] h-[20rem] rounded-md shadow-2xl'>

                  </div>
                </div>
              }
              <ButtonWithHover icon={BsPlayBtnFill} text='YouTube' isOpen={showYouTube} onClick={handleYouTube} />
            </div>
          </div>
          <div className='flex flex-auto justify-end'>
            <ButtonWithHover icon={BsGearFill} text='settings' />
          </div>
        </div>
      </div>
    </div>
  )
}
