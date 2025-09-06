import { useTasks } from "../context/TaskContext"

export default function TaskList() {
  const { tasks, removeTask } = useTasks()

  if (tasks.length === 0) {
    return <p className="text-gray-500 text-center">No tasks yet.</p>
  }

  return (
    <ul className="space-y-2">
      {tasks.map((task, index) => (
        <li
          key={index}
          className="flex justify-between items-center bg-gray-50 border rounded-md px-4 py-2 shadow-sm hover:bg-gray-100"
        >
          <span className="text-gray-800">{task}</span>
          <button
            onClick={() => removeTask(index)}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}
