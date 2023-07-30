import React, { useState } from 'react'
import { BsXLg, BsCheckCircle, BsCheckCircleFill } from 'react-icons/bs'

interface TodoItemProps {
  text: string;
  completed: boolean;
  onToggle: () => void
  onRemove: () => void
}

const TodoItem: React.FC<TodoItemProps> = ({ text, completed, onToggle, onRemove }) => {
  const [isCompleted, setIsCompleted] = useState(completed)

  const handleToggle = () => {
    setIsCompleted(!isCompleted)
    onToggle();
  }

  return (
    <div className='flex items-center justify-between'>
      <span className={`text-left text-xl flex-1 ${isCompleted ? 'text-gray-500' : ''}`}>
        {text}
      </span>
      <button className='ml-2 p-1.5 rounded-md hover:bg-zinc-700 hover:scale-110 flex items-center' onClick={handleToggle} >
        {isCompleted ? <BsCheckCircleFill size={25} /> : <BsCheckCircle size={25}/>}
      </button>
      <button className='ml-2 p-1.5 rounded-md hover:bg-zinc-700 hover:scale-110 flex items-center' onClick={onRemove} >
        <BsXLg size={25} />
      </button>
    </div>
  )
}

export default TodoItem
