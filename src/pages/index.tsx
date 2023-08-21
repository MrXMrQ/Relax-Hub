import React, { useState } from 'react'
import { BsSkipBackwardFill, BsFillPlayFill, BsSkipForwardFill, BsFillVolumeDownFill, BsFillVolumeMuteFill, BsFillVolumeUpFill, BsFilm, BsListCheck, BsPlayBtnFill, BsGearFill, BsChevronCompactLeft, BsChevronCompactRight, BsSpotify } from 'react-icons/bs'
import { Cabin_Condensed, Inter } from 'next/font/google'
import Clock from '@/components/Clock'
import ButtonWithHover from '@/components/ButtonWithHover'
import ToDoList from '@/components/TodoList'
import YouTubePlayer from '@/components/YouTubePlayer'

const inter = Inter({ subsets: ['latin'] })

enum Key {
  Mute = 'showMute',
  Scene = 'showScene',
  ToDoList = 'showToDoList',
  YouTube = 'showYouTube',
  Spotify = 'showSpotify',
  Setting = 'showSetting',
}

const InitialState = {
  showMute: false,
  showScene: false,
  showToDoList: false,
  showYouTube: false,
  showSpotify: false,
  showSetting: false,
}

export default function Home() {
  const [showState, setShowState] = useState(InitialState)
  const [mute, setMute] = useState(false)

  const handleToggle = (key: Key) => {
    setShowState((prevState) => ({
      ...InitialState,
      [key]: !prevState[key],
    }))
  }

  return (
    <div className='w-screen h-screen bg-slate-500'>
      <div className='flex items-center flex-col w-full h-full py-5'>

        <div className='justify-center w-full h-full'>
          <div className='grid grid-cols-3 grid-rows-1 gap-4 place-items-center'>
            <div className='col-start-1'>
              <button className='rounded-full w-5 h-5 outline outline-white outline-4 outline-offset-4 duration-150 hover:bg-yellow-500 hover:outline-yellow-500 hover:scale-105 hover:animate-pulse' />
            </div>
            <div className='col-start-2'>
              <button className='rounded-full w-5 h-5 outline outline-white outline-4 outline-offset-4 duration-150 hover:bg-yellow-500 hover:outline-yellow-500 hover:scale-105 hover:animate-pulse' />
            </div>
            <div className='col-start-3 '>
              <button className='rounded-full w-5 h-5 outline outline-white outline-4 outline-offset-4 duration-150 hover:bg-yellow-500 hover:outline-yellow-500 hover:scale-105 hover:animate-pulse' />
            </div>
          </div>
        </div>

        <div className='flex w-11/12 lg:h-[3.4rem] md:h-[3.4rem] sm:h-[3.4rem] rounded-lg bg-gradient-to-r from-gray-800 to-zinc-900 shadow-2xl shadow-stone-800 outline outline-slate-200 outline-1 text-center items-center px-4' style={{ fontSize: '1.75rem' }}>
          <div className='flex flex-auto'>
            <Clock></Clock>
          </div>
          <div className='flex flex-auto justify-center items-center space-x-4' >
            <ButtonWithHover icon={BsSkipBackwardFill} text='skip' isOpen={false} />
            <ButtonWithHover icon={BsFillPlayFill} text='play' isOpen={false} />
            <ButtonWithHover icon={BsSkipForwardFill} text='skip' isOpen={false} />
            <ButtonWithHover icon={BsFillVolumeDownFill} text='volume' isOpen={false} />
            <div className=''>
              {
                showState.showMute ? (
                  <div>
                    <ButtonWithHover icon={BsFillVolumeMuteFill} text='unmute' isOpen={!showState.showMute} onClick={() => handleToggle(Key.Mute)} />
                  </div>
                ) : (
                  <ButtonWithHover icon={BsFillVolumeUpFill} text='mute' isOpen={showState.showMute} onClick={() => handleToggle(Key.Mute)} />
                )
              }
            </div>

            <div className='relative'>
              {
                showState.showScene && (
                  <div className='absolute bottom-16 left-1/2 transform -translate-x-1/2 rounded-lg shadow-md text-base font-bold w-auto h-auto bg-zinc-700 px-2 py-2 space-y-10'>
                    <div className='flex w-full h-full items-center'>
                      <BsChevronCompactLeft size={50} />
                      <div className='bg-blue-500 w-[30rem] h-[20rem] rounded-md shadow-2xl'></div>
                      <BsChevronCompactRight size={50} />
                    </div>
                  </div>
                )
              }
              <ButtonWithHover icon={BsFilm} text='szene' isOpen={showState.showScene} onClick={() => handleToggle(Key.Scene)} />
            </div>

            <div className='relative'>
              {
                showState.showToDoList && (
                  <div className='absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10'>
                    <ToDoList />
                  </div>
                )
              }
              <ButtonWithHover icon={BsListCheck} text='to_do_list' isOpen={showState.showToDoList} onClick={() => handleToggle(Key.ToDoList)} />
            </div>

            <div className='relative'>
              {
                showState.showYouTube && (
                  <div className='absolute bottom-16 left-1/2 transform -translate-x-1/2 rounded-lg'>
                    <YouTubePlayer></YouTubePlayer>
                  </div>
                )
              }
              <ButtonWithHover icon={BsPlayBtnFill} text='YouTube' isOpen={showState.showYouTube} onClick={() => handleToggle(Key.YouTube)} />
            </div>

          </div>
          <div className='flex flex-auto justify-end space-x-2'>
            <ButtonWithHover icon={BsSpotify} text='Spotify' isOpen={showState.showSpotify} onClick={() => handleToggle(Key.Spotify)} />
            <ButtonWithHover icon={BsGearFill} text='settings' isOpen={showState.showSetting} onClick={() => handleToggle(Key.Setting)} />
          </div>
        </div>
      </div>
    </div>
  )
}
