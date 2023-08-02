import React, { useState } from 'react'
import TodoItem from './TodoItem'

interface Todo {
  id: number
  text: string
  completed: boolean
}

function TodoList() {
  const [newTodoText, setNewTodoText] = useState('')
  const [todos, setTodos] = useState<Todo[]>([])

  /**
   * Fügt ein neues To-Do-Element zur Liste hinzu, wenn der neue Text nicht leer ist.
   * Erzeugt ein neues To-Do-Objekt mit einer eindeutigen ID (basierend auf dem aktuellen Zeitstempel),
   * dem eingegebenen Text und der Status "completed: false". Setzt den neuen Zustand für die To-Do-Liste,
   * indem das vorherige Array mit der Verbreiterungssyntax (...) beibehalten wird und das neue To-Do-Objekt hinzugefügt wird.
   * Setzt dann den neuen Eingabetext auf einen leeren String.
   */
  const handleAddTodo = () => {
    if (newTodoText.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now(),
        text: newTodoText,
        completed: false
      }
      setTodos((prevTodos) => [...prevTodos, newTodo])
      setNewTodoText('')
    }
  }

  /**
   * Behandelt das Drücken der Enter-Taste in der Eingabe, um ein neues To-Do-Element hinzuzufügen.
   * Wenn die Enter-Taste gedrückt wird, wird die handleAddTodo-Funktion aufgerufen,
   * um das To-Do-Element zur Liste hinzuzufügen.
   */
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleAddTodo()
    }
  }

  /**
   * Aktualisiert den Status (completed) eines To-Do-Elements basierend auf seiner ID.
   * Sucht das To-Do-Element mit der übergebenen ID im vorherigen Array und erstellt ein neues Array,
   * in dem der Status des entsprechenden Elements umgekehrt wird (true wird zu false und umgekehrt).
   * Das neue Array wird als neuer Zustand für die To-Do-Liste gesetzt.
   * @param {number} id - Die ID des To-Do-Elements, dessen Status aktualisiert werden soll.
   */
  const handleToggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  /**
   * Entfernt ein To-Do-Element aus der Liste basierend auf seiner ID.
   * Erstellt ein neues Array, das alle To-Do-Elemente aus dem vorherigen Array enthält,
   * außer demjenigen mit der übergebenen ID.
   * Das neue Array wird als neuer Zustand für die To-Do-Liste gesetzt, wodurch das To-Do-Element entfernt wird.
   * @param {number} id - Die ID des To-Do-Elements, das entfernt werden soll.
   */
  const handleRemoveTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="rounded-lg w-[20rem] h-[22rem] overflow-auto px-3 shadow-2xl bg-gradient-to-r from-gray-800 to-zinc-900 outline outline-white outline-1">
      <div className="flex-1 text-center text-3xl font-bold">To do list</div>
      <div className='bg-zinc-700 px-2 py-2 rounded-lg h-auto min-h-[19rem]'>
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full rounded px-2 py-1 text-xl text-black outline-none"
          placeholder="Enter your task..."
        />

        <div className="mt-2 space-y-2">
          {todos.map(({ id, text, completed }) => (
            <TodoItem
              key={id}
              text={text}
              completed={completed}
              onToggle={() => handleToggleTodo(id)}
              onRemove={() => handleRemoveTodo(id)}
            />
          ))}
        </div>
      </div>

    </div>
  )
}

export default TodoList
