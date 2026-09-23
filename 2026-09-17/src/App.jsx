import { useEffect, useState } from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import { Header } from './components/Header.jsx'
import { PageSection } from './components/PageSection.jsx'
import { TaskForm } from './components/TaskForm.jsx'
import { TaskList } from './components/TaskList.jsx'
import { getTasks } from './services/taskApi.js'

function Home({ tasks }) {
  const done = tasks.filter((task) => task.completed).length

  return (
    <PageSection title="Minu ülesanded">
      <p className="intro">Lihtne koht, kus oma koolitöid meeles hoida.</p>
      <div className="summary">{done} / {tasks.length} ülesannet on tehtud</div>
      <Link className="main-button" to="/tasks">Ava ülesannete nimekiri</Link>
    </PageSection>
  )
}

function TasksPage({ tasks, onAddTask, filter, setFilter, onToggle, onDelete }) {
  return (
    <PageSection title="Ülesanded">
      <TaskForm onAddTask={onAddTask} />
      <TaskList
        tasks={tasks}
        filter={filter}
        onFilterChange={setFilter}
        onToggle={onToggle}
        onDelete={onDelete}
      />
    </PageSection>
  )
}

function TaskDetails({ tasks }) {
  const { taskId } = useParams()
  const task = tasks.find((item) => item.id === Number(taskId))

  if (!task) return <PageSection title="Ülesannet ei leitud"><Link to="/tasks">Tagasi nimekirja</Link></PageSection>

  return (
    <PageSection title={task.title}>
      <p>Staatus: {task.completed ? 'tehtud' : 'pooleli'}</p>
      <Link to="/tasks">← Tagasi</Link>
    </PageSection>
  )
}

function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    let ignore = false

    getTasks()
      .then((data) => {
        if (!ignore) {
          setTasks(data)
          setStatus('success')
        }
      })
      .catch((loadError) => {
        if (!ignore) {
          setError(loadError.message)
          setStatus('error')
        }
      })

    // see aitab vanal päringul hiljem ekraani ära muuta
    return () => { ignore = true }
  }, [])

  function addTask(title) {
    setTasks((current) => [
      ...current,
      { id: Date.now(), title, completed: false },
    ])
  }

  function toggleTask(id) {
    setTasks((current) => current.map((task) => (
      task.id === id ? { ...task, completed: !task.completed } : task
    )))
  }

  function deleteTask(id) {
    setTasks((current) => current.filter((task) => task.id !== id))
  }

  return (
    <div className="app-shell">
      <Header />
      <main>
        {status === 'loading' && <p className="message">Laen ülesandeid...</p>}
        {status === 'error' && <p className="message error">{error}</p>}
        {status === 'success' && (
          <Routes>
            <Route path="/" element={<Home tasks={tasks} />} />
            <Route path="/tasks" element={<TasksPage tasks={tasks} onAddTask={addTask} filter={filter} setFilter={setFilter} onToggle={toggleTask} onDelete={deleteTask} />} />
            <Route path="/tasks/:taskId" element={<TaskDetails tasks={tasks} />} />
            <Route path="*" element={<PageSection title="Lehte ei leitud"><Link to="/">Mine avalehele</Link></PageSection>} />
          </Routes>
        )}
      </main>
    </div>
  )
}

export default App
