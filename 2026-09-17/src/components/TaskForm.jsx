import { useState } from 'react'

export function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('')
  const [error, setError] = useState('')

  function submit(event) {
    event.preventDefault()
    const cleanTitle = title.trim()

    if (!cleanTitle) {
      setError('Kirjuta enne ülesande nimi')
      return
    }

    onAddTask(cleanTitle)
    setTitle('')
    setError('')
  }

  return (
    <form className="task-form" onSubmit={submit}>
      <label htmlFor="task-title">Uus ülesanne</label>
      <div className="form-row">
        <input
          id="task-title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="nt loe Reacti kohta"
        />
        <button type="submit">Lisa</button>
      </div>
      {error && <p className="error">{error}</p>}
    </form>
  )
}
