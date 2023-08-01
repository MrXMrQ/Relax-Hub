import React, { useState } from 'react'
import { IconType } from 'react-icons'

interface ButtonWithHoverProps {
  icon: IconType
  text: string
  isOpen: boolean
  onClick?: () => void
}

function ButtonWithHover({ icon, text, isOpen, onClick }: ButtonWithHoverProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  const handleHover = () => {
    setIsHovered(true)
  }

  const handleHoverLeave = () => {
    setIsHovered(false)
  }

  return (
    <div className='relative'>
      <button className='p-1.5 rounded-md hover:bg-zinc-700 hover:scale-110 flex items-center' onMouseEnter={handleHover} onMouseLeave={handleHoverLeave} onClick={onClick}>
        {icon && <span>{React.createElement(icon)}</span>}
      </button>
      {
      isHovered && !isOpen &&
      <div className='absolute bottom-16 left-1/2 transform -translate-x-1/2 rounded-lg shadow-lg text-base font-bold px-5 py-1 bg-gradient-to-r from-gray-800 to-zinc-900 z-20'>
        {text}
      </div>
      }
    </div>
  )
}

export default ButtonWithHover
