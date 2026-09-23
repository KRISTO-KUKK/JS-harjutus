import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TaskCard } from './TaskCard.jsx'

test('näitab ülesande nime ja kutsub nuppu vajutades callbacki', async () => {
  const user = userEvent.setup()
  const onToggle = () => {}
  const toggleSpy = vi.fn(onToggle)

  render(<TaskCard task={{ id: 1, title: 'Õpi Reacti', completed: false }} onToggle={toggleSpy} onDelete={() => {}} />)

  expect(screen.getByText('Õpi Reacti')).toBeInTheDocument()
  await user.click(screen.getByRole('button', { name: 'Märgi tehtuks' }))
  expect(toggleSpy).toHaveBeenCalledWith(1)
})
