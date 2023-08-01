import React, { useState } from 'react'
import { BsPlayFill, BsFillCameraVideoOffFill } from 'react-icons/bs'

const YouTubePlayer = () => {
  const [input, setInput] = useState('')
  const [videoId, setVideoId] = useState('')
  const [placeholder, setPlaceholder] = useState('Enter YouTube URL here')

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      playVideo()
    }
  }

  /**
   * Die Funktion 'playVideo' wird aufgerufen, wenn der Benutzer versucht, ein Video
   * in einem YouTube-Player abzuspielen. Sie überprüft zunächst, ob die eingegebene
   * URL eine gültige YouTube-Video-URL ist, und extrahiert dann die Video-ID aus der URL.
   * Wenn die Video-ID vorhanden ist, wird sie verwendet, um das YouTube-Video abzuspielen.
   *
   * Funktioniert nur innerhalb einer Komponente, die den React-Hook 'useState' verwendet,
   * um den Zustand der Eingabe (input), die Video-ID (videoId) und den Platzhalter (placeholder)
   * zu verwalten.
   *
   * @throws Wenn ein Fehler während der Ausführung auftritt, wird ein Fehler abgefangen.
   */
  const playVideo = () => {
    try {
      const url = new URL(input)

      if (url.host === 'www.youtube.com' && url.pathname === '/watch') {
        const videoIdFromUrl = url.searchParams.get('v')

        if (videoIdFromUrl) {
          setVideoId(videoIdFromUrl)
          setInput('')
          setPlaceholder('Enter YouTube URL here')
        } else {
          setPlaceholder('Die eingegebene URL ist keine gültige YouTube-URL.')
          setInput('')
        }
      }
    } catch (error) {
      setPlaceholder('Die eingegebene URL ist keine gültige YouTube-URL.')
      setInput('')
    }
  }

  return (
    <div className='w-auto h-auto rounded-lg px-2 py-2 shadow-2xl bg-gradient-to-r from-gray-800 to-zinc-900 outline outline-white outline-1'>
      <div className='flex py-2'>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          className='w-full rounded px-2 py-2 text-xl text-black outline-none'
          placeholder={placeholder}
        />
        <button className='flex items-center justify-center w-20 rounded-md hover:bg-zinc-700 hover:scale-110' onClick={playVideo}>
          <BsPlayFill />
        </button>
      </div>
      <div className='bg-zinc-700 w-[42rem] h-[20rem] rounded-md flex justify-center items-center'>
        {!videoId && <BsFillCameraVideoOffFill />}
        {videoId && (
          <iframe className='w-full h-full' src={`https://www.youtube.com/embed/${videoId}`} />
        )}
      </div>
    </div>
  )
}

export default YouTubePlayer