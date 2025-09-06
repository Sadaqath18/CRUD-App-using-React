import { useState } from "react"
import { useTasks } from "../context/TaskContext"

export default function TaskForm() {
  const { addTask } = useTasks()
  const [task, setTask] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!task.trim()) return
    addTask(task)
    setTask("")
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
      >
        Add
      </button>
    </form>
  )
}
