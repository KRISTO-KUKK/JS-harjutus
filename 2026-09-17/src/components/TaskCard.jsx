export function TaskCard({ task, onToggle, onDelete }) {
  return (
    <article className={`task-card ${task.completed ? 'done' : ''}`}>
      <div>
        <h3>{task.title}</h3>
        <span>{task.completed ? 'Tehtud' : 'Pooleli'}</span>
      </div>
      <div className="card-actions">
        <button type="button" onClick={() => onToggle(task.id)}>
          {task.completed ? 'Võta tehtuks märge maha' : 'Märgi tehtuks'}
        </button>
        <button className="delete" type="button" onClick={() => onDelete(task.id)}>
          Kustuta
        </button>
      </div>
    </article>
  )
}
