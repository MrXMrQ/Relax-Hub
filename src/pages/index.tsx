import { BsSkipBackwardFill, BsFillPlayFill, BsSkipForwardFill, BsFillVolumeDownFill, BsFillVolumeMuteFill, BsFilm, BsFillGridFill, BsGearFill } from 'react-icons/bs';
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
        <div className='flex w-11/12 lg:h-[3.4rem] md:h-[3.4rem] sm:h-[3.4rem] rounded-lg bg-gradient-to-r from-gray-800 to-zinc-900 shadow-2xl shadow-stone-800 outline outline-slate-200 outline-1 text-center items-center px-4' style={{ fontSize: '1.75rem' }}>
          <div className='flex flex-auto'>
            <button>
              ..
            </button>
          </div>
          <div className='flex flex-auto justify-center items-center space-x-4' >
            <button className='p-1.5 rounded-md hover:bg-zinc-700 hover:scale-110'>
              <BsSkipBackwardFill />
            </button>
            <button className='p-1.5 rounded-md hover:bg-zinc-700 hover:scale-110'>
              <BsFillPlayFill />
            </button>
            <button className='p-1.5 rounded-md hover:bg-zinc-700 hover:scale-110'>
              <BsSkipForwardFill />
            </button>
            <button className='p-1.5 rounded-md hover:bg-zinc-700 hover:scale-110'>
              <BsFillVolumeDownFill />
            </button>
            <button className='p-1.5 rounded-md hover:bg-zinc-700 hover:scale-110'>
              <BsFillVolumeMuteFill />

            </button>
            <button className='p-1.5 rounded-md hover:bg-zinc-700 hover:scale-110'>
              <BsFilm />
            </button>
            <button className='p-1.5 rounded-md hover:bg-zinc-700 hover:scale-110'>
              <BsFillGridFill />
            </button>
          </div>
          <div className='flex flex-auto justify-end'>
            <button className='p-1.5 rounded-md hover:bg-zinc-700 hover:scale-110'>
              <BsGearFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
