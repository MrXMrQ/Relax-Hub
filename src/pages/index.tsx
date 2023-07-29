import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
        <div className='flex justify-center w-11/12 h-[3rem] rounded-lg bg-stone-950 bg-opacity-90 shadow-2xl shadow-stone-800 outline outline-slate-200 outline-1 text-center text'>
          <div className="bg-blue-400 shrink w-48">
            Time | Day/Night
          </div>
          <div className='bg-blue-600 shrink w-96'>
            Back | Play/Pause | Skip | Volume | Mute Buttons
          </div>
          <div className='bg-blue-800 shrink w-32'>
            Szene | Tools
          </div>
          <div className='bg-blue-400 shrink w-32'>
            Options
          </div>
        </div>
      </div>
    </div>
  )
}
