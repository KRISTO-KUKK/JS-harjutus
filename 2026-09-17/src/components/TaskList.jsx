import { Link } from 'react-router-dom'
import { TaskCard } from './TaskCard.jsx'

export function TaskList({ tasks, filter, onFilterChange, onToggle, onDelete }) {
  const visibleTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed
    if (filter === 'active') return !task.completed
    return true
  })

  return (
    <>
      <div className="filters" aria-label="Ülesannete filter">
        {[
          ['all', 'Kõik'],
          ['active', 'Pooleli'],
          ['completed', 'Tehtud'],
        ].map(([value, label]) => (
          <button
            className={filter === value ? 'selected' : ''}
            key={value}
            type="button"
            onClick={() => onFilterChange(value)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="task-list">
        {visibleTasks.length === 0 ? (
          <p className="empty">Selles vaates ülesandeid ei ole.</p>
        ) : (
          visibleTasks.map((task) => (
            <div key={task.id}>
              <TaskCard task={task} onToggle={onToggle} onDelete={onDelete} />
              <Link className="details-link" to={`/tasks/${task.id}`}>
                Vaata detaile →
              </Link>
            </div>
          ))
        )}
      </div>
    </>
  )
}
