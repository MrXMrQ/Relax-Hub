import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-screen h-screen bg-white'>
      <div className='flex items-center flex-col w-full h-full'>
        <div className='justify-center w-full h-full bg-orange-500'>
          <div className='grid grid-cols-3 gap-4 justify-center'>
            <div className='bg-blue-300 p-4 col-start-1 row-start-1'>test</div>
            <div className='bg-green-300 p-4 col-start-2 row-start-2'>test</div>
            <div className='bg-red-300 p-4 col-start-3 row-start-3'>test</div>
          </div>
        </div>
        <div className='bg-yellow-200 w-4/5 h-7 justify-center flex text-black rounded-lg mt-auto'>
          test
          test
        </div>
      </div>
    </div>
  )
}
