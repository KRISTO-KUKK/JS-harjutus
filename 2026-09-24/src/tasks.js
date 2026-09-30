export const tasks = [
  { id: 1, title: "Learn Node.js", completed: true },
  { id: 2, title: "Practise Express", completed: false },
  { id: 3, title: "Make a small API", completed: false }
];

export function getAllTasks(taskList) {
  return [...taskList];
}

export function getTaskById(taskList, id) {
  return taskList.find((task) => task.id === Number(id));
}

export function getCompletedTasks(taskList) {
  return taskList.filter((task) => task.completed);
}
