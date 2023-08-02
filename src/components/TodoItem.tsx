import React from 'react'
import { BsXLg, BsCheckCircle, BsCheckCircleFill } from 'react-icons/bs'

interface TodoItemProps {
  text: string
  completed: boolean
  onToggle: () => void
  onRemove: () => void
}

const TodoItem = ({ text, completed, onToggle, onRemove }: TodoItemProps) => {
  return (
    <div className='flex items-center justify-between'>
      <span className={`text-left text-xl flex-1 ${completed ? 'text-gray-400' : ''}`}>
        {text}
      </span>
      <button className='ml-2 p-1.5 rounded-md hover:bg-gradient-to-r from-gray-800 to-zinc-900 hover:scale-110 hover:outline outline-white outline-1' onClick={onToggle}>
        {completed ? <BsCheckCircleFill size={25} /> : <BsCheckCircle size={25} />}
      </button>
      <button className='ml-2 p-1.5 rounded-md hover:bg-gradient-to-r from-gray-800 to-zinc-900 hover:scale-110 hover:outline outline-white outline-1' onClick={onRemove}>
        <BsXLg size={25} />
      </button>
    </div>
  )
}

export default TodoItem
